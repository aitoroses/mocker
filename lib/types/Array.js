'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Array = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = array;

var _freshman = require('freshman');

var _Plugin2 = require('./Plugin');

var _Plugin3 = _interopRequireDefault(_Plugin2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Array = exports.Array = function (_Plugin) {
  _inherits(Array, _Plugin);

  function Array(_model, length, randomValues) {
    _classCallCheck(this, Array);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Array).call(this));

    var _length = undefined;
    randomValues ? _length = Math.floor(Math.random() * length + 1) : _length = length;
    _this._length = _length;

    _this._models = (0, _freshman.range)(0, _this._length).map(function () {
      return _model;
    });

    return _this;
  }

  _createClass(Array, [{
    key: 'run',
    value: function run(instance) {
      return this._models.map(function (m) {
        return m.run(this);
      }.bind(instance));
    }
  }]);

  return Array;
}(_Plugin3.default);

function array(m, l, r) {
  return new Array(m, l, r);
}
//# sourceMappingURL=Array.js.map