import {curry2_} from './_internal/curry2_'
import {merge_} from './merge'
import {reduceValues_} from './reduceValues'
import {empty_} from './empty'
import {first_} from './first'
import {of_} from './of'

export const indexBy_ = (fn, list) =>
  reduceValues_(
    (accumulated, value) =>
      merge_(accumulated, of_(fn(value), value, accumulated)),
    empty_(first_(Array.from(list))),
    list,
  )
export const indexBy = curry2_(indexBy_)
export default indexBy
