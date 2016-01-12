import { noop } from '..'

export default class Audit {
  application = noop();
  appId = noop();
  auditAction = noop();
  auditDate = noop();
  auditDescription = noop();
  auditUser = noop();
  id = noop();
}
