'use strict';

require('babel-polyfill');

var _ = require('../');

var _models = require('./models');

var _UserUm = require('./umm/UserUm');

var _UserUm2 = _interopRequireDefault(_UserUm);

var _OU = require('./umm/Helper/OU');

var _OU2 = _interopRequireDefault(_OU);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mocker2', function () {

  it("should be awesome1", function () {

    var m = _.mocker.schema(_OU2.default, 50).schema(_UserUm2.default, 1).build();

    var result = m.db.get(_UserUm2.default);
    console.log(JSON.stringify(result, null, '  '));
  });
});
//# sourceMappingURL=mocker.spec.js.map