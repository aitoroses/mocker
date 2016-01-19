import { noop, faker, value, incremental } from '../..'

let w = value('weblogic')

export default class Application {
  callbackServiceUri = faker('random.uuid');
  crTime = faker('date.past');
  createdBy = w;
  id = incremental('Application');
  name = value('NP5');
  lmTime = faker('date.past');
  updatedBy = w;
  hint= noop();
  appHttpPort= value(7003);
  appHttpsPort= value(7004);
  apiURLUserName = w;
  apiUrlUserPass = value('welcome1');
  appWorkspace = value("/workspace");
}
