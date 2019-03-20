import {toPairs_} from './toPairs'
import {curry2_} from './_internal/curry2_'

export const forEach_ = (fn, functor) => {
  if (typeof functor.forEach === 'function') {
    functor.forEach((value, key) => {
      fn(value, key)
    })

    return functor
  }
  return toPairs_(functor).forEach(([key, value]) => {
    fn(value, key)
  })
}
export const forEach = curry2_(forEach_)

export default forEach
