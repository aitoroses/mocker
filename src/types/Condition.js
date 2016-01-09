import Plugin from './Plugin'

export class Condition extends Plugin {

  constructor(condFn, type) {
    super()
    if (typeof condFn != "function") {
      throw Error("Type of condition FN is not a function")
    }

    this.condFn = condFn
    this.type = type
  }

  run(instance) {
    if (this.condFn.call(instance)) {
      if (typeof this.type.run == "function") {
        return this.type.run(instance)
      } else {
        return type
      }
    } else {
      return null
    }
  }
}

export default function condition(a, b) {
  return new Condition(a, b)
}
