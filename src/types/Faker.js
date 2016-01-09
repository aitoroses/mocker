import fakerjs from 'faker'
import Plugin from './Plugin'

// prop :: String -> Object -> Any
import {prop} from 'freshman'

export class Faker extends Plugin {

  constructor(generator) {
    super()
    if (typeof generator != "string") {
      throw Error("Type of Faker generator is not a string")
    }

    this.value = generator
  }

  run() {
    let paths = this.value.split('.')
    let fake = paths.reduce((acc, p) => prop(p, acc), fakerjs)
    return fake()
  }
}

export default function faker(a) {
  return new Faker(a);
}
