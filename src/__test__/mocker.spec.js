import 'babel-polyfill'
import {mocker} from '../'
import {User, Property} from './models'

import UserUm from './umm/UserUm'
import OU from './umm/Helper/OU'

describe('Mocker2', () => {

  it("should be awesome1", () => {

    const m = mocker
      .schema(User, 1)
      .build()

    const result = m.db.get(User)
    console.log(JSON.stringify(result, null, '  '))

  })
})
