/**
 * Config class will hold data relevant
 * to the runtime config
 */

// data Config
export default class Config {
  constructor(Model, count) {
    this.type = Model.name
    this.model = Model
    this.count = count
  }
}
