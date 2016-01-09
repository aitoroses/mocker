'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _injector = require('../injector');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plugin = function Plugin() {
  _classCallCheck(this, Plugin);

  var db = _injector.injector.container.Database;
  if (!db) throw Error('Plugin was not able to find a Database instance');
  this.db = db;

  if (typeof this.run != "function") throw Error("Plugin does not implement run function");
};

exports.default = Plugin;
//# sourceMappingURL=Plugin.js.map