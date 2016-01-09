import {Incremental, Faker, Computed, Condition, Static, HasOne, HasMany} from '..'

export class User {
  static virtuals = ["computedVirtual"];

  _id = new Incremental();
  computedVirtual = new Computed(() => "computedVirtual");
  condition_1 = new Condition(() => false, new Static(1));
  condition_2 = new Condition(() => true, new Static(1));
  condition_3 = new Condition(() => true, new Faker('internet.email'));
  computed1 = new Computed(db =>  "myComputedProp1");
  uid = new Faker('internet.email');
  name = new Static("foo");
  thing = {
    foo: new Static("bar")
  };
}

export class Request {
  static virtuals = ["user"];

  userCollection = new HasMany(User, 2);
  user = new HasOne(User);
  creator = new Computed(function(db) { return this.user.name});
}
