'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HasMany = undefined;
exports.default = hasMany;

var _Plugin2 = require('./Plugin');

var _Plugin3 = _interopRequireDefault(_Plugin2);

var _freshman = require('freshman');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HasMany = exports.HasMany = function (_Plugin) {
  _inherits(HasMany, _Plugin);

  function HasMany(model, config) {
    _classCallCheck(this, HasMany);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HasMany).call(this));

    _this.model = model;
    _this.config = config || {};
    return _this;
  }

  _createClass(HasMany, [{
    key: 'getRandom',
    value: function getRandom(list) {

      if (list.length < this.config.amount || list.length < this.config.max) throw Error('Collection is smaller than the requested amount');
      var index = Math.round(Math.random() * (list.length - 1));
      return list[index];
    }
  }, {
    key: 'run',
    value: function run() {
      var _this2 = this;

      var instances = this.db.get(this.model);
      var amount = this.config.amount || Math.ceil(Math.random() * this.config.max);
      return (0, _freshman.range)(0, amount).map(function () {
        return _this2.getRandom(instances);
      });
    }
  }]);

  return HasMany;
}(_Plugin3.default);

function hasMany(a, b) {
  return new HasMany(a, b);
}
//# sourceMappingURL=HasMany.js.map