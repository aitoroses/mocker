import Plugin from './Plugin'

import {range} from 'freshman'

export class HasMany extends Plugin {
  constructor(model, count) {
    super()
    this.model = model
    this.count = count
  }

  getRandom(list) {
    if (list.length < this.count) throw Error('Collection is smaller than the requested amount')
    const index = Math.round(Math.random() * (list.length - 1))
    return list[index]
  }

  run() {
    const instances = this.db.get(this.model.name)
    return range(0, this.count).map(() => this.getRandom(instances))
  }
}

export default function hasMany(a, b) {
  return new HasMany(a, b);
}
