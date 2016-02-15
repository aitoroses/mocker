import casualJS from 'casual'
import Plugin from './Plugin'

// prop :: String -> Object -> Any
import {prop} from 'freshman'

export class Casual extends Plugin {

  constructor(generator) {
    super()
    if (typeof generator != "string") {
      throw Error("Type of Casual generator is not a string")
    }

    this.value = generator
  }

  run() {
    let paths = this.value.split('.')
    return paths.reduce((acc, p) => prop(p, acc), casualJS)
  }
}

export default function casual(a) {
  return new Casual(a);
}
