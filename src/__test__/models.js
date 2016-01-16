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

// export class User {
//   static virtuals = ["computedVirtual"];
//
//   _id = incremental('user');
//   computedVirtual = computed(() => "computedVirtual");
//   computed1 = computed(db =>  "myComputedProp1");
//   condition_1 = condition(() => false, value(1));
//   condition_2 = condition(() => true, value(1));
//   condition_3 = condition(() => true, faker('internet.email'));
//   uid = faker('internet.email');
//   name = value("foo");
//   thing = {
//     foo: value("bar")
//   };
// }
//
// export class Request {
//   static virtuals = ["user"];
//
//   _id = incremental('request');
//   userCollection = hasMany(User, 2);
//   user = hasOne(User);
//   creator = computed(function(db) { return this.user.name});
//   creator = array(computed(function(db) { return this.user.name}), 10);
//   creator2 = array(computed(function(db) { return this.user.name}), 10, true);
//   emails = array(faker('internet.email'), 2);
//   number = chance('integer');
// }


export class User {
  static virtuals = ["_firstName", "_lastName", "_uid"];

  // virtual field
  _firstName = faker('name.firstName');
  _lastName = faker('name.lastName');
  _uid = computed(function() {return (this._lastName.slice(0,5) + this._firstName.slice(0,2) + "1").toLowerCase()});

  properties = {
    value: value(1),
    userId: computed(function() {return this._uid}),
    label: (() => {
      let id = 0
      return {
        run() { return `EAPP_PROPERTY_${id++}` }
      }
    })(),
    applicationId: value(2),
    propertyId: incremental()
  };

  userData = {
    uid: computed(function() {return this._uid}),
    displayName: computed(function() {return this._firstName + ' ' +  this._lastName}),
    lastName: computed(function() {return this._lastName}),
    mail: faker('internet.email'),
    telephone: faker("phone.phoneNumber")
  };
  ou = {
    run() {
      return [[
        "AUSTRIA_PH",
        "CHINA_MAXIMA"
      ][Math.round(Math.random() * 2)]]
    }
  };
}
