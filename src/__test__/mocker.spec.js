import {mocker} from '../'
import {User, Request} from './models'

import Application from './umm/Application'

describe('Mocker2', () => {
  it("should be awesome", () => {

    const m = mocker
      .schema(Application, 1)
      // .schema(User, 20)
      // .schema(Request, 1)
      .build()

    const result = m.db.get()
    console.log(JSON.stringify(result, null, '  '))

  })
})
