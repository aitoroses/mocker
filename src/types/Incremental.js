import Plugin from './Plugin'

let id = 0

export class Incremental extends Plugin {
  run() {
    return id++;
  }
}

export default function incremental() {
  return new Incremental()
}
