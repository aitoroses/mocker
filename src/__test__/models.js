import {Faker, Computed, Static} from '..'

export class User {

  static virtuals = [
    "computedVirtual"
  ];

  constructor(db) {
    this.computedVirtual = new Computed(this, () =>  {
      return "computedVirtual"
    })
    this.computed1 = new Computed(db, db =>  "myComputedProp1");
    this.uid = new Faker('internet.email');
    this.name = new Static("foo")
    this.thing = {
      foo: new Static("bar")
    }
  }
}
