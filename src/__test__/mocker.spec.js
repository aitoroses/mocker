import 'babel-polyfill'
import {mocker} from '../'
import {User, Property} from './models'

import UserUm from './umm/UserUm'
import OU from './umm/Helper/OU'

describe('Mocker2', () => {

  it("should be awesome1", () => {

    const m = mocker
      .schema(OU, 50)
      .schema(UserUm, 1)
      .build()

    const result = m.db.get(UserUm)
    console.log(JSON.stringify(result, null, '  '))

  })
})
