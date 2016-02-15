"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Incremental = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = incremental;

var _Plugin2 = require("./Plugin");

var _Plugin3 = _interopRequireDefault(_Plugin2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var idNamespaces = {};

var Incremental = exports.Incremental = function (_Plugin) {
  _inherits(Incremental, _Plugin);

  function Incremental(namespace) {
    _classCallCheck(this, Incremental);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Incremental).call(this));

    _this.namespace = namespace || "@@default";
    var value = idNamespaces[_this.namespace] || 0;
    idNamespaces[_this.namespace] = value;
    return _this;
  }

  _createClass(Incremental, [{
    key: "run",
    value: function run() {
      return idNamespaces[this.namespace]++;
    }
  }]);

  return Incremental;
}(_Plugin3.default);

function incremental(a) {
  return new Incremental(a);
}
//# sourceMappingURL=Incremental.js.map