import {curry3_} from './curry3_'
import {toPairs_} from './toPairs'
import {isNil} from 'typed-is'

const reduceRight = (arr, reducer, initial) => {
  let idx = arr.length - 1
  while (idx >= 0) {
    initial = reducer(arr[idx], initial)
    idx -= 1
  }
  return initial
}

export const reduce_ = (reducer, initial, functor, right) => {
  if (isNil(functor)) {
    return initial
  }
  if (Array.isArray(functor)) {
    return !right
      ? functor.reduce(reducer, initial)
      : reduceRight(functor, reducer, initial)
  } else {
    return reduce_(
      (acc, [key, value]) => reducer(acc, value, key),
      initial,
      toPairs_(functor),
    )
  }
}

export const reduce = curry3_((reducer, initial, functor) =>
  reduce_(reducer, initial, functor, false),
)

export default reduce
