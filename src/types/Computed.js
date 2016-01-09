import Plugin from './Plugin'

export class Computed extends Plugin {

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

export default function computed(a) {
  return new Computed(a)
}
