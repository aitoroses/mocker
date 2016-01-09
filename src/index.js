
export Plugin from './types/Plugin'
export Incremental from './types/Incremental'
export Faker from './types/Faker'
export Computed from './types/Computed'
export Condition from './types/Condition'
export Static from './types/Static'
export HasOne from './types/HasOne'
export HasMany from './types/HasMany'
export {injector} from './injector'

import Mocker from './Mocker'
import Database from './Database'

import {injector} from './injector'

injector.service('Database', Database)
injector.service('Mocker', Mocker, 'Database')

export const mocker = injector.container.Mocker
