'use strict';

var _class, _temp, _class2, _temp2;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Request = exports.User = undefined;

var _ = require('..');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = exports.User = (_temp = _class = function User() {
  _classCallCheck(this, User);

  this._id = (0, _.incremental)('user');
  this.computedVirtual = (0, _.computed)(function () {
    return "computedVirtual";
  });
  this.computed1 = (0, _.computed)(function (db) {
    return "myComputedProp1";
  });
  this.condition_1 = (0, _.condition)(function () {
    return false;
  }, (0, _.value)(1));
  this.condition_2 = (0, _.condition)(function () {
    return true;
  }, (0, _.value)(1));
  this.condition_3 = (0, _.condition)(function () {
    return true;
  }, (0, _.faker)('internet.email'));
  this.uid = (0, _.faker)('internet.email');
  this.name = (0, _.value)("foo");
  this.thing = {
    foo: (0, _.value)("bar")
  };
}, _class.virtuals = ["computedVirtual"], _temp);
var Request = exports.Request = (_temp2 = _class2 = function Request() {
  _classCallCheck(this, Request);

  this._id = (0, _.incremental)('request');
  this.userCollection = (0, _.hasMany)(User, 2);
  this.user = (0, _.hasOne)(User);
  this.creator = (0, _.array)((0, _.computed)(function (db) {
    return this.user.name;
  }), 10);
  this.creator2 = (0, _.array)((0, _.computed)(function (db) {
    return this.user.name;
  }), 10, true);
  this.emails = (0, _.array)((0, _.faker)('internet.email'), 2);
  this.number = (0, _.chance)('integer');
}, _class2.virtuals = ["user"], _temp2);
//# sourceMappingURL=models.js.map