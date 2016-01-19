import { noop, faker, value, incremental, computed } from '../../..'

let w = value('weblogic')

function* OUGen() {
  const countries = ['SPAIN', 'GERMANY', 'FRANCE', 'CHINA', 'AUSTRIA']
  const divisions = ['PHARMA', 'SANDOZ', 'ALCON']
  function rand(arr) {
    const l = arr.length
    const i = Math.floor(Math.random() * l)
    return arr[i]
  }
  while(true) {
    yield `${rand(countries)}_${rand(divisions).slice(0,2)}`
  }
}

let gen = OUGen()

// Model Class
export default class OU {

  crTime = faker('date.past');
  createdBy = w;
  id = computed(() => gen.next().value);
  lmTime = faker('date.past');
  updatedBy = w;
}
