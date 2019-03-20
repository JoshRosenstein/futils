import {curry2_} from './_internal/curry2_'
import {mapValues_} from './mapValues'
import {zip_} from './zip'
import {length_} from './length'
import {call_} from './call'
import {reduceValues_} from './reduceValues'

export const zipApply_ = (fns, functor) => {
  if (length_(fns) !== length_(functor)) {
    throw new Error('left and right werent the same size')
  }

  return mapValues_(x => reduceValues_(call_, call_, x), zip_(fns, functor))
}

export const zipApply = curry2_(zipApply_)
export default zipApply
