import curry2_ from './_internal/curry2_'
import {mapValues_} from './mapValues'

export const lens_ = (getter, setter) => toFunctorFn => target =>
  mapValues_(v => setter(v, target), toFunctorFn(getter(target)))
export const lens = curry2_(lens_)

export default lens
