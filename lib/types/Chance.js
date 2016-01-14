'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChanceMocker = undefined;
exports.default = chanceMocker;

var _chance = require('chance');

var _chance2 = _interopRequireDefault(_chance);

var _Plugin2 = require('./Plugin');

var _Plugin3 = _interopRequireDefault(_Plugin2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var chance = new _chance2.default();

var ChanceMocker = exports.ChanceMocker = function (_Plugin) {
  _inherits(ChanceMocker, _Plugin);

  function ChanceMocker(generator) {
    _classCallCheck(this, ChanceMocker);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChanceMocker).call(this));

    if (typeof generator != "string") {
      throw Error("Type of Chance generator is not a string");
    }

    _this.value = generator;
    return _this;
  }

  _createClass(ChanceMocker, [{
    key: 'run',
    value: function run(instance) {
      var re = /(^[a-zA-Z.]*)/; //aZ.aZ
      var matches = re.exec(this.value);
      var strFn = undefined;
      if (matches && matches.length === 2) {
        strFn = 'chance.' + this.value;
      }

      re = /\((.*?)\)/; //Match ()
      matches = re.exec(this.value);
      if (!matches) {
        strFn = 'chance.' + this.value + '()';
      }

      return eval(strFn);
    }
  }]);

  return ChanceMocker;
}(_Plugin3.default);

function chanceMocker(a) {
  return new ChanceMocker(a);
}
//# sourceMappingURL=Chance.js.map