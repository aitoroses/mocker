import Plugin from './Plugin'

export class HasOne extends Plugin {
  constructor(model) {
    super()
    this.model = model
  }
  run() {
    const instances = this.db.get(this.model)
    const index = Math.round(Math.random() * (instances.length - 1))
    return instances[index]
  }
}

export default function hasOne(a) {
  return new HasOne(a);
}
