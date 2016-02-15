'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Faker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = faker;

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _Plugin2 = require('./Plugin');

var _Plugin3 = _interopRequireDefault(_Plugin2);

var _freshman = require('freshman');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// prop :: String -> Object -> Any


var Faker = exports.Faker = function (_Plugin) {
  _inherits(Faker, _Plugin);

  function Faker(generator) {
    _classCallCheck(this, Faker);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Faker).call(this));

    if (typeof generator != "string") {
      throw Error("Type of Faker generator is not a string");
    }

    _this.value = generator;
    return _this;
  }

  _createClass(Faker, [{
    key: 'run',
    value: function run() {
      var paths = this.value.split('.');
      var fake = paths.reduce(function (acc, p) {
        return (0, _freshman.prop)(p, acc);
      }, _faker2.default);
      return fake();
    }
  }]);

  return Faker;
}(_Plugin3.default);

function faker(a) {
  return new Faker(a);
}
//# sourceMappingURL=Faker.js.map