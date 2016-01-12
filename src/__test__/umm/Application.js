import { noop } from '../..'

export default class Application {
  callbackServiceUri = noop();
  crTime = noop();
  createdBy = noop();
  id = noop();
  name = noop();
  lmTime = noop();
  updatedBy = noop();
  hint= noop();
  appHttpPort= noop();
  appHttpsPort= noop();
  apiURLUserName = noop();
  apiUrlUserPass = noop();
  appWorkspace = noop();
}
