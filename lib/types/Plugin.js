'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _ = require('../');

var _Database = require('../Database');

var _Database2 = _interopRequireDefault(_Database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plugin = function Plugin() {
  _classCallCheck(this, Plugin);

  var db = _.injector.get(_Database2.default);
  if (!db) throw Error('Plugin was not able to find a Database instance');
  this.db = db;

  if (typeof this.run != "function") throw Error("Plugin does not implement run function");
};

exports.default = Plugin;
//# sourceMappingURL=Plugin.js.map