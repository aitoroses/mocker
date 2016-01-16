import {range} from 'freshman'
import Plugin from './Plugin'

export class Array extends Plugin {

  constructor(_model, length, randomValues) {
    super()

    let _length
    (randomValues)
      ? _length = Math.floor((Math.random() * length) + 1)
      : _length = length
    this._length = _length

    this._models = range(0, this._length)
        .map(() => _model)

  }

  run(instance) {
    return this._models.map(
      (function (m) {
        return m.run(this)
      }).bind(instance))
  }
}

export default function array(m,l,r) {
  return new Array(m,l,r)
}
