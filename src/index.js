// Import Reflect Polyfill
import 'reflect-metadata'

export Plugin from './types/Plugin'
export incremental from './types/Incremental'
export faker from './types/Faker'
export chance from './types/Chance'
export casual from './types/Casual'
export randexp from './types/RandExp'
export computed from './types/Computed'
export condition from './types/Condition'
export value from './types/Value'
export values from './types/Values'
export hasOne from './types/HasOne'
export hasMany from './types/HasMany'
export noop from './types/noop'
export array from './types/Array'

import Mocker from './Mocker'
import Database from './Database'

import {Injector} from 'angular2-di'

export const injector = Injector.resolveAndCreate([
  Mocker,
  Database
])

export const mocker = injector.get(Mocker)
