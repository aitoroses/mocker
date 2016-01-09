import {mocker} from '../'
import {User, Request} from './models'

describe('Mocker2', () => {
  it("should be awesome", () => {

    const m = mocker
      .schema(User, 10)
      .schema(Request, 1)
      .build()

    const result = m.db.get('Request')[0]
    console.log(JSON.stringify(result, null, '  '))

  })
})
