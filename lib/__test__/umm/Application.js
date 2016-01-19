'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _ = require('../..');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var w = (0, _.value)('weblogic');

var Application = function Application() {
  _classCallCheck(this, Application);

  this.callbackServiceUri = (0, _.faker)('random.uuid');
  this.crTime = (0, _.faker)('date.past');
  this.createdBy = w;
  this.id = (0, _.incremental)('Application');
  this.name = (0, _.value)('NP5');
  this.lmTime = (0, _.faker)('date.past');
  this.updatedBy = w;
  this.hint = (0, _.noop)();
  this.appHttpPort = (0, _.value)(7003);
  this.appHttpsPort = (0, _.value)(7004);
  this.apiURLUserName = w;
  this.apiUrlUserPass = (0, _.value)('welcome1');
  this.appWorkspace = (0, _.value)("/workspace");
};

exports.default = Application;
//# sourceMappingURL=Application.js.map