import Plugin from './Plugin'

export class Value extends Plugin {
  constructor(value) {
    super()
    this._value = value
  }
  run() {
    return this._value
  }
}

export default function value(a) {
  return new Value(a)
}
