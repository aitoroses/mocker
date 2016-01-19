// A class that will hold the output
// data Database

let databaseSymbol = Symbol('database')

export default class Database {
  constructor() {
    this[databaseSymbol] = new Map
  }

  get(Model) {
    let s = this[databaseSymbol]
    return Model ? s.get(Model) : s
  }

  newCollection(Model, data) {
    this.get().set(Model, data)
  }
}
