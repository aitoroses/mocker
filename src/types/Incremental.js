import Plugin from './Plugin'

let id = 0

class Incremental extends Plugin {
  run() {
    return id++;
  }
}

export default Incremental
