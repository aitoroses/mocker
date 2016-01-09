import Plugin from './Plugin'

export default class HasOne extends Plugin {
  constructor(model) {
    super()
    this.model = model
  }
  run() {
    const instances = this.db.get(this.model.name)
    const index = Math.round(Math.random() * (instances.length - 1))
    return instances[index]
  }
}
