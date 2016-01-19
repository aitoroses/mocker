import {compose, range} from 'freshman'
import Config from './Config'

import Database from './Database'

// generateDescriptor :: ConfigType -> Model
const generateDescriptor = (db, gen) => new gen.model(db)

// processLeaf :: LeafNode -> Object
const processLeaf = function(l) {return l.run(this)}

// processDescriptor :: Model -> ProcessedObject
const processDescriptor = (d) => {
  return Object.keys(d).reduce((acc, k) => {
    let obj = d[k]

    // Process a complex object recursively
    function recursiveCall(obj) {
      if (obj && obj.run) {
        return processLeaf.call(acc, obj)
      } else if(typeof obj == "object") {
        return Object.keys(obj).reduce((acc, k) => {
          acc[k] = recursiveCall(obj[k])
          return acc;
        }, {});
      }
    }

    acc[k] = recursiveCall(obj)
    return acc
  }, {})
}

// cleanVirtuals :: Model -> Object -> Object
const cleanVirtuals = (descriptor, instance) => {
  let virtuals = descriptor.constructor.virtuals
  if (virtuals) virtuals.forEach(k => delete instance[k])
}

export default class Mocker {

  constructor(db: Database) {
    this.db = db
  }

  schemas = [];

  reset() {
    this.schemas = []
  }

  schema(Model, count) {
    this.schemas.push(new Config(Model, count))
    return this
  }

  getDescriptors() {
    return this.schemas.reduce((acc, schema) => {
      let desc = generateDescriptor(acc, schema)
      acc.newCollection(schema.model, desc)
      return acc
    }, this.db)
  }

  build() {
    this.schemas.reduce((acc, schema) => {

      // Generate a descriptor for schema
      let desc = generateDescriptor(acc, schema)

      // Generate instances from descriptor
      let instances = range(0, schema.count)
        .map(() => processDescriptor(desc))

      // Clean
      instances.forEach(x => cleanVirtuals(desc, x))

      // Add collection instances to db
      acc.newCollection(schema.model, instances)

      return acc
    }, this.db)
    return this
  }
}
