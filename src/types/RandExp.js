import RandExpJS from 'randexp'
import Plugin from './Plugin'

export class RandExp extends Plugin {

  constructor(generator) {
    super()
    this.value = generator
  }

  run() {
    return new RandExpJS(this.value).gen()
  }
}

export default function randexp(a) {
  return new RandExp(a);
}
