"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Config class will hold data relevant
 * to the runtime config
 */

// data Config

var Config = function Config(Model, count) {
  _classCallCheck(this, Config);

  this.type = Model.name;
  this.model = Model;
  this.count = count;
};

exports.default = Config;
//# sourceMappingURL=Config.js.map