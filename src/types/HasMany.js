import Plugin from './Plugin'

import {range} from 'freshman'

export class HasMany extends Plugin {
  constructor(model, config) {
    super()
    this.model = model
    this.config = config || {}
  }

  getRandom(list) {

    if (list.length < this.config.amount || list.length < this.config.max) throw Error('Collection is smaller than the requested amount')
    const index = Math.round(Math.random() * (list.length - 1))
    return list[index]
  }

  run() {
    const instances = this.db.get(this.model)
    const amount =  this.config.amount || Math.ceil(Math.random() * this.config.max)
    return range(0, amount).map(() => this.getRandom(instances))
  }
}

export default function hasMany(a, b) {
  return new HasMany(a, b);
}
