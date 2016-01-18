'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mocker = exports.injector = exports.array = exports.noop = exports.hasMany = exports.hasOne = exports.values = exports.value = exports.condition = exports.computed = exports.chance = exports.faker = exports.incremental = exports.Plugin = undefined;

require('reflect-metadata');

var _Plugin2 = require('./types/Plugin');

var _Plugin3 = _interopRequireDefault(_Plugin2);

var _Incremental = require('./types/Incremental');

var _Incremental2 = _interopRequireDefault(_Incremental);

var _Faker = require('./types/Faker');

var _Faker2 = _interopRequireDefault(_Faker);

var _Chance = require('./types/Chance');

var _Chance2 = _interopRequireDefault(_Chance);

var _Computed = require('./types/Computed');

var _Computed2 = _interopRequireDefault(_Computed);

var _Condition = require('./types/Condition');

var _Condition2 = _interopRequireDefault(_Condition);

var _Value = require('./types/Value');

var _Value2 = _interopRequireDefault(_Value);

var _Values = require('./types/Values');

var _Values2 = _interopRequireDefault(_Values);

var _HasOne = require('./types/HasOne');

var _HasOne2 = _interopRequireDefault(_HasOne);

var _HasMany = require('./types/HasMany');

var _HasMany2 = _interopRequireDefault(_HasMany);

var _noop2 = require('./types/noop');

var _noop3 = _interopRequireDefault(_noop2);

var _Array = require('./types/Array');

var _Array2 = _interopRequireDefault(_Array);

var _Mocker = require('./Mocker');

var _Mocker2 = _interopRequireDefault(_Mocker);

var _Database = require('./Database');

var _Database2 = _interopRequireDefault(_Database);

var _angular2Di = require('angular2-di');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Reflect Polyfill
exports.Plugin = _Plugin3.default;
exports.incremental = _Incremental2.default;
exports.faker = _Faker2.default;
exports.chance = _Chance2.default;
exports.computed = _Computed2.default;
exports.condition = _Condition2.default;
exports.value = _Value2.default;
exports.values = _Values2.default;
exports.hasOne = _HasOne2.default;
exports.hasMany = _HasMany2.default;
exports.noop = _noop3.default;
exports.array = _Array2.default;
var injector = exports.injector = _angular2Di.Injector.resolveAndCreate([_Mocker2.default, _Database2.default]);

var mocker = exports.mocker = injector.get(_Mocker2.default);
//# sourceMappingURL=index.js.map