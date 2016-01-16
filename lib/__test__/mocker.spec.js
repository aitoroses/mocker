'use strict';

var _ = require('../');

var _models = require('./models');

var _Application = require('./umm/Application');

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mocker2', function () {
  it("should be awesome", function () {

    var m = _.mocker.schema(_models.User, 20).build();

    var result = m.db.get('User');
    console.log(JSON.stringify(result, null, '  '));
  });
});
//# sourceMappingURL=mocker.spec.js.map