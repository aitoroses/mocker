import {
  incremental,
  faker,
  chance,
  computed,
  condition,
  value,
  hasOne,
  hasMany,
  array
} from '..'

export class User {
  static virtuals = ["computedVirtual"];

  _id = incremental('user');
  computedVirtual = computed(() => "computedVirtual");
  computed1 = computed(db =>  "myComputedProp1");
  condition_1 = condition(() => false, value(1));
  condition_2 = condition(() => true, value(1));
  condition_3 = condition(() => true, faker('internet.email'));
  uid = faker('internet.email');
  name = value("foo");
  thing = {
    foo: value("bar")
  };
}

export class Request {
  static virtuals = ["user"];

  _id = incremental('request');
  userCollection = hasMany(User, 2);
  user = hasOne(User);
  creator = array(computed(function(db) { return this.user.name}), 10);
  creator2 = array(computed(function(db) { return this.user.name}), 10, true);
  emails = array(faker('internet.email'), 2);
  number = chance('integer');
}
