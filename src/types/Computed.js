import Plugin from './Plugin'

export default class Computed extends Plugin {

  constructor(fn) {
    super()
    if (typeof fn != "function") {
      throw Error("Type of Computed FN is not a function")
    }

    this.fn = fn
  }

  run(instance) {
    return this.fn.call(instance, this.db)
  }
}
