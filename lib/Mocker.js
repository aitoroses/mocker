'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _freshman = require('freshman');

var _Config = require('./Config');

var _Config2 = _interopRequireDefault(_Config);

var _Database = require('./Database');

var _Database2 = _interopRequireDefault(_Database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// generateDescriptor :: ConfigType -> Model
var generateDescriptor = function generateDescriptor(db, gen) {
  return new gen.model(db);
};

// processLeaf :: LeafNode -> Object
var processLeaf = function processLeaf(l) {
  return l.run(this);
};

// processDescriptor :: Model -> ProcessedObject
var processDescriptor = function processDescriptor(d) {
  return Object.keys(d).reduce(function (acc, k) {
    var obj = d[k];

    // Process a complex object recursively
    function recursiveCall(obj) {
      if (obj && obj.run) {
        return processLeaf.call(acc, obj);
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

// cleanVirtuals :: Model -> Object -> Object
var cleanVirtuals = function cleanVirtuals(descriptor, instance) {
  var virtuals = descriptor.constructor.virtuals;
  if (virtuals) virtuals.forEach(function (k) {
    return delete instance[k];
  });
};

var Mocker = function () {
  function Mocker(db) {
    _classCallCheck(this, Mocker);

    this.schemas = [];

    this.db = db;
  }

  _createClass(Mocker, [{
    key: 'reset',
    value: function reset() {
      this.schemas = [];
    }
  }, {
    key: 'schema',
    value: function schema(Model, count) {
      this.schemas.push(new _Config2.default(Model, count));
      return this;
    }
  }, {
    key: 'getDescriptors',
    value: function getDescriptors() {
      return this.schemas.reduce(function (acc, schema) {
        var desc = generateDescriptor(acc, schema);
        acc.newCollection(schema.model, desc);
        return acc;
      }, this.db);
    }
  }, {
    key: 'build',
    value: function build() {
      this.schemas.reduce(function (acc, schema) {

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

        // Add collection instances to db
        acc.newCollection(schema.model, instances);

        return acc;
      }, this.db);
      return this;
    }
  }]);

  return Mocker;
}();

Reflect.defineMetadata('design:paramtypes', [_Database2.default], Mocker);
exports.default = Mocker;
//# sourceMappingURL=Mocker.js.map