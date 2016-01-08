'use strict';

var _ = require('../');

var _models = require('./models');

var _Static = require('../types/Static');

var _Static2 = _interopRequireDefault(_Static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mocker2', function () {
  it("should be awesome", function () {

    var m = _.mocker.schema(_models.User, 100).build();

    console.log(m);
  });
});
//# sourceMappingURL=mocker.spec.js.map