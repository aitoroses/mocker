"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = undefined;

var _class, _temp;

var _ = require("..");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var User = exports.User = (_temp = _class = function User() {
  _classCallCheck(this, User);

  this._firstName = (0, _.faker)('name.firstName');
  this._lastName = (0, _.faker)('name.lastName');
  this._uid = (0, _.computed)(function () {
    return (this._lastName.slice(0, 5) + this._firstName.slice(0, 2) + "1").toLowerCase();
  });
  this.properties = {
    testCasual: (0, _.casual)('country'),
    testRandExp: (0, _.randexp)(/hello+ (world|to you)/),
    value: (0, _.value)(1),
    userId: (0, _.computed)(function () {
      return this._uid;
    }),
    label: function () {
      var id = 0;
      return {
        run: function run() {
          return "EAPP_PROPERTY_" + id++;
        }
      };
    }(),
    applicationId: (0, _.value)(2),
    propertyId: (0, _.incremental)()
  };
  this.userData = {
    uid: (0, _.computed)(function () {
      return this._uid;
    }),
    displayName: (0, _.computed)(function () {
      return this._firstName + ' ' + this._lastName;
    }),
    lastName: (0, _.computed)(function () {
      return this._lastName;
    }),
    mail: (0, _.faker)('internet.email'),
    telephone: (0, _.faker)("phone.phoneNumber")
  };
  this.ou = {
    run: function run() {
      return [["AUSTRIA_PH", "CHINA_MAXIMA"][Math.round(Math.random() * 2)]];
    }
  };
}

// virtual field
, _class.virtuals = ["_firstName", "_lastName", "_uid"], _temp);
//# sourceMappingURL=models.js.map