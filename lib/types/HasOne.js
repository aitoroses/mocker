'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HasOne = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = hasOne;

var _Plugin2 = require('./Plugin');

var _Plugin3 = _interopRequireDefault(_Plugin2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HasOne = exports.HasOne = function (_Plugin) {
  _inherits(HasOne, _Plugin);

  function HasOne(model) {
    _classCallCheck(this, HasOne);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HasOne).call(this));

    _this.model = model;
    return _this;
  }

  _createClass(HasOne, [{
    key: 'run',
    value: function run() {
      var instances = this.db.get(this.model);
      var index = Math.round(Math.random() * (instances.length - 1));
      return instances[index];
    }
  }]);

  return HasOne;
}(_Plugin3.default);

function hasOne(a) {
  return new HasOne(a);
}
//# sourceMappingURL=HasOne.js.map