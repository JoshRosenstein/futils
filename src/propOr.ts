import {curry3_} from './_internal/curry3_'
import {prop_} from './prop'
import {defaultTo_} from './defaultTo'

export const propOr_ = (d, name, keyedFunctor) =>
  defaultTo_(d, prop_(name, keyedFunctor))
export const propOr = curry3_(propOr_)
export default propOr
