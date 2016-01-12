import Plugin from './Plugin'

export class Noop extends Plugin {
  run() { return null }
}

export default function noop() {
  return new Noop()
}
