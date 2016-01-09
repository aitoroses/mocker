import {
  incremental,
  faker,
  computed,
  condition,
  value,
  hasOne,
  hasMany
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
  creator = computed(function(db) { return this.user.name});
}
