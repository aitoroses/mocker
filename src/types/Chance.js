import Chance from 'chance'
import Plugin from './Plugin'

const chance = new Chance()

export class ChanceMocker extends Plugin {

  constructor(generator) {
    super()
    if (typeof generator != "string") {
      throw Error("Type of Chance generator is not a string")
    }

    this.value = generator
  }

  run(instance) {
    let re = /(^[a-zA-Z.]*)/   //aZ.aZ
    let matches = re.exec(this.value)
    let strFn
    if (matches && matches.length === 2){
        strFn = 'chance.' + this.value
    }

    re = /\((.*?)\)/ //Match ()
    matches = re.exec(this.value)
    if (!matches){
        strFn = 'chance.' + this.value + '()'
    }

    return eval(strFn)
  }
}

export default function chanceMocker(a) {
  return new ChanceMocker(a);
}
