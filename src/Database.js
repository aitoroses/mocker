// A class that will hold the output
// data Database

let databaseSymbol = Symbol('database')

export default class Database {
  constructor() {
    this[databaseSymbol] = {}
  }

  get(coll) {
    let s = this[databaseSymbol]
    return coll ? s[coll] : s
  }

  newCollection(name, data) {
    this.get()[name] = data
  }
}
