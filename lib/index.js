'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mocker = exports.Static = exports.Computed = exports.Faker = exports.Plugin = undefined;

var _Plugin2 = require('./types/Plugin');

var _Plugin3 = _interopRequireDefault(_Plugin2);

var _Faker2 = require('./types/Faker');

var _Faker3 = _interopRequireDefault(_Faker2);

var _Computed2 = require('./types/Computed');

var _Computed3 = _interopRequireDefault(_Computed2);

var _Static2 = require('./types/Static');

var _Static3 = _interopRequireDefault(_Static2);

var _freshman = require('freshman');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.Plugin = _Plugin3.default;
exports.Faker = _Faker3.default;
exports.Computed = _Computed3.default;
exports.Static = _Static3.default;

var Generator = function Generator(Model, count) {
  _classCallCheck(this, Generator);

  this.type = Model.name;
  this.model = Model;
  this.count = count;
};

// generateDescriptor :: GeneratorType -> Model

var generateDescriptor = function generateDescriptor(db, gen) {
  return new gen.model(db);
};

// processLeaf :: LeafNode -> Database -> Object
var processLeaf = function processLeaf(l) {
  return l.run();
};

// processDescriptor :: Model -> ProcessedObject
var processDescriptor = function processDescriptor(d) {
  return Object.keys(d).reduce(function (acc, k) {
    var obj = d[k];

    // Process a complex object recursively
    function recursiveCall(obj) {
      if (obj.run) {
        return processLeaf(obj);
      } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == "object") {
        return Object.keys(obj).reduce(function (acc, k) {
          acc[k] = recursiveCall(obj[k]);
          return acc;
        }, {});
      }
    }

    acc[k] = recursiveCall(obj);
    return acc;
  }, {});
};

var cleanVirtuals = function cleanVirtuals(descriptor, instance) {
  var virtuals = descriptor.constructor.virtuals;
  virtuals.forEach(function (k) {
    return delete instance[k];
  });
};

var Mocker = function () {
  function Mocker() {
    _classCallCheck(this, Mocker);

    this.schemas = [];
  }

  _createClass(Mocker, [{
    key: 'reset',
    value: function reset() {
      this.schemas = [];
    }
  }, {
    key: 'schema',
    value: function schema(Model, count) {
      this.schemas.push(new Generator(Model, count));
      return this;
    }
  }, {
    key: 'getDescriptors',
    value: function getDescriptors() {
      return this.schemas.reduce(function (acc, schema) {
        var desc = generateDescriptor(acc, schema);
        acc[schema.type] = desc;
        return acc;
      }, {});
    }
  }, {
    key: 'build',
    value: function build() {
      return this.schemas.reduce(function (acc, schema) {

        // Generate a descriptor for schema
        var desc = generateDescriptor(acc, schema);

        // Generate instances from descriptor
        var instances = (0, _freshman.range)(0, schema.count).map(function () {
          return processDescriptor(desc);
        });

        // Clean
        instances.forEach(function (x) {
          return cleanVirtuals(desc, x);
        });

        acc[schema.type] = instances;
        return acc;
      }, {});
    }
  }]);

  return Mocker;
}();

var mocker = exports.mocker = new Mocker();
//# sourceMappingURL=index.js.map