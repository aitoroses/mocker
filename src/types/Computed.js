import Plugin from './Plugin'

export default class Computed extends Plugin {

  constructor(db, fn) {
    super()
    if (typeof fn != "function") {
      throw Error("Type of Computed generator is not a function")
    }
    this.db = db
    this.fn = fn
  }

  run() {
    return this.fn(this.db)
  }
}
