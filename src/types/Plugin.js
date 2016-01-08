export default class Plugin {
  constructor() {
    if (typeof this.run != "function")
      throw Error("Plugin does not implement run function")
  }
}
