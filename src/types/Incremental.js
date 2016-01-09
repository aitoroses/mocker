import Plugin from './Plugin'

let idNamespaces = {}

export class Incremental extends Plugin {
  constructor(namespace) {
    super()
    this.namespace = namespace || "@@default"
    let value = idNamespaces[this.namespace] || 0
    idNamespaces[this.namespace] = value
  }
  run() {
    return idNamespaces[this.namespace]++
  }
}

export default function incremental(a) {
  return new Incremental(a)
}
