import {Faker, Computed, Condition, Static, HasOne, HasMany} from '..'

export class User {

  static virtuals = ["computedVirtual"];

  constructor(db) {
    this.computedVirtual = new Computed(() =>  {
      return "computedVirtual"
    })
    this.condition_1 = new Condition(() => false, new Static(1))
    this.condition_2 = new Condition(() => true, new Static(1))
    this.condition_3 = new Condition(() => true, new Faker('internet.email'))
    this.computed1 = new Computed(db =>  "myComputedProp1");
    this.uid = new Faker('internet.email');
    this.name = new Static("foo")
    this.thing = {
      foo: new Static("bar")
    }
  }
}

export class Request {

  static virtuals = ["user"];

  constructor() {
    this.userCollection = new HasMany(User, 2)
    this.user = new HasOne(User)
    this.creator = new Computed(function(db) { return this.user.name})
  }
}
