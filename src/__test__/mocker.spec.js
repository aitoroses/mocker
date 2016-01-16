import {mocker} from '../'
import {User, Property} from './models'

import Application from './umm/Application'

describe('Mocker2', () => {
  it("should be awesome", () => {

    const m = mocker
      .schema(User, 20)
      .build()

    const result = m.db.get('User')
    console.log(JSON.stringify(result, null, '  '))

  })
})
