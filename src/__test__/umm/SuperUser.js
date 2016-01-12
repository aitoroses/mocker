import { noop } from '..'

export default class SuperUser {
  appId = noop();
  crTime = noop();
  createdBy = noop();
  lmTime = noop();
  ou = noop();
  updatedBy = noop();
  userId = noop();
}
