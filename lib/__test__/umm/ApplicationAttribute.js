'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _ = require('../..');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var w = (0, _.value)('weblogic');

var ApplicationAttribute = function ApplicationAttribute() {
  _classCallCheck(this, ApplicationAttribute);

  this.application = (0, _.noop)();
  this.crTime = (0, _.noop)();
  this.createdBy = w;
  this.id = (0, _.noop)();
  this.lmTime = (0, _.noop)();
  this.name = (0, _.noop)();
  this.updatedBy = w;
  this.description = (0, _.faker)('lorem.sentence');
};

exports.default = ApplicationAttribute;
//# sourceMappingURL=ApplicationAttribute.js.map