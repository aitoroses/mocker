
export Plugin from './types/Plugin'
export Faker from './types/Faker'
export Computed from './types/Computed'
export Static from './types/Static'

import {compose, range} from 'freshman'

class Generator {
  constructor(Model, count) {
    this.type = Model.name
    this.model = Model
    this.count = count
  }
}

// generateDescriptor :: GeneratorType -> Model
const generateDescriptor = (db, gen) => new gen.model(db)

// processLeaf :: LeafNode -> Database -> Object
const processLeaf = l => l.run()

// processDescriptor :: Model -> ProcessedObject
const processDescriptor = (d) => {
  return Object.keys(d).reduce((acc, k) => {
    let obj = d[k]

    // Process a complex object recursively
    function recursiveCall(obj) {
      if (obj.run) {
        return processLeaf(obj)
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

const cleanVirtuals = (descriptor, instance) => {
  let virtuals = descriptor.constructor.virtuals
  virtuals.forEach(k => delete instance[k])
}

class Mocker {

  schemas = [];

  reset() {
    this.schemas = []
  }

  schema(Model, count) {
    this.schemas.push(new Generator(Model, count))
    return this
  }

  getDescriptors() {
    return this.schemas.reduce((acc, schema) => {
      let desc = generateDescriptor(acc, schema)
      acc[schema.type] = desc
      return acc
    }, {})
  }

  build() {
    return this.schemas.reduce((acc, schema) => {

      // Generate a descriptor for schema
      let desc = generateDescriptor(acc, schema)

      // Generate instances from descriptor
      let instances = range(0, schema.count)
        .map(() => processDescriptor(desc))

      // Clean
      instances.forEach(x => cleanVirtuals(desc, x))

      acc[schema.type] = instances
      return acc
    }, {})
  }
}

export const mocker = new Mocker()
