import {mocker} from '../'
import {User, Request} from './models'

describe('Mocker2', () => {
  it("should be awesome", () => {

    const m = mocker
      .schema(User, 20)
      .schema(Request, 1)
      .build()

    const result = m.db.get()
    console.log(JSON.stringify(result, null, '  '))

  })
})
