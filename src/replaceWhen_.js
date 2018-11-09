import {always_} from './always'
import {mapValues_} from './mapValues'
import {when_} from './when'

export const replaceWhen = (predicate, replacement, obj) =>
  mapValues_(val => when_(predicate, always_(replacement), val), obj)
