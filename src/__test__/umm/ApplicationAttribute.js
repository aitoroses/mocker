import { noop, faker, value, incremental, weblogic } from '../..'

let w = value('weblogic')

export default class ApplicationAttribute {
  application = noop();
  crTime = noop();
  createdBy = w;
  id = noop();
  lmTime = noop();
  name = noop();
  updatedBy = w;
  description = faker('lorem.sentence');
}
