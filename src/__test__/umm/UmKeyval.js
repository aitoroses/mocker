import { noop } from '..'

export default class UmKeyval {
  createdBy = noop();
  isValEncrypted = noop();
  key = noop();
  updatedBy = noop();
  val = noop();
}
