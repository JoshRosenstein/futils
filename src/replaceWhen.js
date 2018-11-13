import {curry3_} from './_internal/curry3_'
import {always_} from './always'
import {mapValues_} from './mapValues'
import {when_} from './when'

export const replaceWhen_ = (predicate, replacement, obj) =>
  mapValues_(val => when_(predicate, always_(replacement), val), obj)

export const replaceWhen = replaceWhen

export default curry3_(replaceWhen_)
