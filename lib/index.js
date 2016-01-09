'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mocker = exports.HasMany = exports.HasOne = exports.Static = exports.Condition = exports.Computed = exports.Faker = exports.Plugin = undefined;

var _Plugin2 = require('./types/Plugin');

var _Plugin3 = _interopRequireDefault(_Plugin2);

var _Faker2 = require('./types/Faker');

var _Faker3 = _interopRequireDefault(_Faker2);

var _Computed2 = require('./types/Computed');

var _Computed3 = _interopRequireDefault(_Computed2);

var _Condition2 = require('./types/Condition');

var _Condition3 = _interopRequireDefault(_Condition2);

var _Static2 = require('./types/Static');

var _Static3 = _interopRequireDefault(_Static2);

var _HasOne2 = require('./types/HasOne');

var _HasOne3 = _interopRequireDefault(_HasOne2);

var _HasMany2 = require('./types/HasMany');

var _HasMany3 = _interopRequireDefault(_HasMany2);

var _Mocker = require('./Mocker');

var _Mocker2 = _interopRequireDefault(_Mocker);

var _Database = require('./Database');

var _Database2 = _interopRequireDefault(_Database);

var _injector = require('./injector');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Plugin = _Plugin3.default;
exports.Faker = _Faker3.default;
exports.Computed = _Computed3.default;
exports.Condition = _Condition3.default;
exports.Static = _Static3.default;
exports.HasOne = _HasOne3.default;
exports.HasMany = _HasMany3.default;

_injector.injector.service('Database', _Database2.default);
_injector.injector.service('Mocker', _Mocker2.default, 'Database');

var mocker = exports.mocker = _injector.injector.container.Mocker;
//# sourceMappingURL=index.js.map