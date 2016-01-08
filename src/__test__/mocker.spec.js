import {mocker} from '../'
import {User} from './models'
import Static from '../types/Static'

describe('Mocker2', () => {
  it("should be awesome", () => {

    let m = mocker
      .schema(User, 100)
      .build()

    console.log(m)

  })
})
