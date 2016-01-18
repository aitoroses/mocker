import {injector} from '../'
import Database from '../Database'

export default class Plugin {
  constructor() {

    const db = injector.get(Database)
    if (!db) throw Error('Plugin was not able to find a Database instance')
    this.db = db

    if (typeof this.run != "function")
      throw Error("Plugin does not implement run function")
  }
}
