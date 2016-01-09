'use strict';

var _ = require('../');

var _models = require('./models');

describe('Mocker2', function () {
  it("should be awesome", function () {

    var m = _.mocker.schema(_models.User, 20).schema(_models.Request, 1).build();

    var result = m.db.get();
    console.log(JSON.stringify(result, null, '  '));
  });
});
//# sourceMappingURL=mocker.spec.js.map