'use strict';

var _class, _temp;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _ = require('../..');

var _OU = require('./Helper/OU');

var _OU2 = _interopRequireDefault(_OU);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var w = (0, _.value)('weblogic');

var UserUm = (_temp = _class = function UserUm() {
  _classCallCheck(this, UserUm);

  this._firstName = (0, _.faker)('name.firstName');
  this._lastName = (0, _.faker)('name.lastName');
  this._uid = (0, _.computed)(function () {
    return '' + this._lastName.slice(0, 5).toLowerCase() + this._firstName.slice(0, 2).toLowerCase();
  });
  this._LDAP = {
    firstName: (0, _.computed)(function () {
      return this._firstName;
    }),
    lastName: (0, _.computed)(function () {
      return this._lastName;
    }),
    uid: (0, _.computed)(function () {
      return this._uid;
    }),
    displayName: (0, _.computed)(function () {
      return this._firstName + ' ' + this._lastName;
    }),
    mail: (0, _.computed)(function () {
      return this._firstName.toLowerCase() + '.' + this._lastName.toLowerCase() + '@novartis.com';
    }),
    telephone: (0, _.faker)('phone.phoneNumber')
  };
  this._OUS = (0, _.hasMany)(_OU2.default, { max: 3 });
  this.crTime = (0, _.faker)('date.past');
  this.createdBy = w;
  this.id = (0, _.computed)(function () {
    return this._uid;
  });
  this.lmTime = (0, _.faker)('date.past');
  this.updatedBy = w;
}, _class.virtuals = ["_firstName", "_lastName", "_uid"], _temp);
exports.default = UserUm;
//# sourceMappingURL=UserUm.js.map