"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Plugin2 = require("./Plugin");

var _Plugin3 = _interopRequireDefault(_Plugin2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Condition = function (_Plugin) {
  _inherits(Condition, _Plugin);

  function Condition(condFn, type) {
    _classCallCheck(this, Condition);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Condition).call(this));

    if (typeof condFn != "function") {
      throw Error("Type of condition FN is not a function");
    }

    _this.condFn = condFn;
    _this.type = type;
    return _this;
  }

  _createClass(Condition, [{
    key: "run",
    value: function run(instance) {
      if (this.condFn()) {
        if (typeof this.type.run == "function") {
          return this.type.run(instance);
        } else {
          return type;
        }
      } else {
        return null;
      }
    }
  }]);

  return Condition;
}(_Plugin3.default);

exports.default = Condition;
//# sourceMappingURL=Condition.js.map