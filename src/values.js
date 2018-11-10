import append_ from './append_'
import reduceValues_ from './reduceValues_'

export const values_ = functor =>
  reduceValues_((l, r) => append_(r, l), [], functor)

export const values = values_
export default values
