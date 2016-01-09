"use strict";

var _class, _temp, _class2, _temp2;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Request = exports.User = undefined;

var _ = require("..");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = exports.User = (_temp = _class = function User() {
  _classCallCheck(this, User);

  this._id = new _.Incremental();
  this.computedVirtual = new _.Computed(function () {
    return "computedVirtual";
  });
  this.condition_1 = new _.Condition(function () {
    return false;
  }, new _.Static(1));
  this.condition_2 = new _.Condition(function () {
    return true;
  }, new _.Static(1));
  this.condition_3 = new _.Condition(function () {
    return true;
  }, new _.Faker('internet.email'));
  this.computed1 = new _.Computed(function (db) {
    return "myComputedProp1";
  });
  this.uid = new _.Faker('internet.email');
  this.name = new _.Static("foo");
  this.thing = {
    foo: new _.Static("bar")
  };
}, _class.virtuals = ["computedVirtual"], _temp);
var Request = exports.Request = (_temp2 = _class2 = function Request() {
  _classCallCheck(this, Request);

  this.userCollection = new _.HasMany(User, 2);
  this.user = new _.HasOne(User);
  this.creator = new _.Computed(function (db) {
    return this.user.name;
  });
}, _class2.virtuals = ["user"], _temp2);
//# sourceMappingURL=models.js.map