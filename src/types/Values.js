import Plugin from './Plugin'

export class Values extends Plugin {
  constructor(value) {
    super()
    this._values = values
  }
  run() {
    const index = Math.round(Math.random() * (values.length - 1))
    return this._values[index]
  }
}

export default function value(a) {
  return new Values(a)
}
