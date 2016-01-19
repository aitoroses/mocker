'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _ = require('../../..');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _marked = [OUGen].map(regeneratorRuntime.mark);

var w = (0, _.value)('weblogic');

function OUGen() {
  var countries, divisions, rand;
  return regeneratorRuntime.wrap(function OUGen$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          rand = function rand(arr) {
            var l = arr.length;
            var i = Math.floor(Math.random() * l);
            return arr[i];
          };

          countries = ['SPAIN', 'GERMANY', 'FRANCE', 'CHINA', 'AUSTRIA'];
          divisions = ['PHARMA', 'SANDOZ', 'ALCON'];

        case 3:
          if (!true) {
            _context.next = 8;
            break;
          }

          _context.next = 6;
          return rand(countries) + '_' + rand(divisions).slice(0, 2);

        case 6:
          _context.next = 3;
          break;

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

var gen = OUGen();

// Model Class

var OU = function OU() {
  _classCallCheck(this, OU);

  this.crTime = (0, _.faker)('date.past');
  this.createdBy = w;
  this.id = (0, _.computed)(function () {
    return gen.next().value;
  });
  this.lmTime = (0, _.faker)('date.past');
  this.updatedBy = w;
};

exports.default = OU;
//# sourceMappingURL=OU.js.map