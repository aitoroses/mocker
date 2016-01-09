
export Plugin from './types/Plugin'
export incremental from './types/Incremental'
export faker from './types/Faker'
export computed from './types/Computed'
export condition from './types/Condition'
export value from './types/Value'
export hasOne from './types/HasOne'
export hasMany from './types/HasMany'
export {injector} from './injector'

import Mocker from './Mocker'
import Database from './Database'

import {injector} from './injector'

injector.service('Database', Database)
injector.service('Mocker', Mocker, 'Database')

export const mocker = injector.container.Mocker
