"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = undefined;

var _ = require("..");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = exports.User = function User(db) {
  _classCallCheck(this, User);

  this.computedVirtual = new _.Computed(this, function () {
    return "computedVirtual";
  });
  this.computed1 = new _.Computed(db, function (db) {
    return "myComputedProp1";
  });
  this.uid = new _.Faker('internet.email');
  this.name = new _.Static("foo");
  this.thing = {
    foo: new _.Static("bar")
  };
};

User.virtuals = ["computedVirtual"];
//# sourceMappingURL=models.js.map