import Plugin from './Plugin'

class Static extends Plugin {
  constructor(value) {
    super()
    this.value = value
  }
  run() {
    return this.value
  }
}

export default Static
