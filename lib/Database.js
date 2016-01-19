'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// A class that will hold the output
// data Database

var databaseSymbol = Symbol('database');

var Database = function () {
  function Database() {
    _classCallCheck(this, Database);

    this[databaseSymbol] = new Map();
  }

  _createClass(Database, [{
    key: 'get',
    value: function get(Model) {
      var s = this[databaseSymbol];
      return Model ? s.get(Model) : s;
    }
  }, {
    key: 'newCollection',
    value: function newCollection(Model, data) {
      this.get().set(Model, data);
    }
  }]);

  return Database;
}();

exports.default = Database;
//# sourceMappingURL=Database.js.map