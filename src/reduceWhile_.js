import toPairs_ from './toPairs_'
import type_ from './type_'
import isDefined_ from './isDefined_'
import isEnumerable_ from './isEnumerable_'

const commonFN = fn => (acc, [key, value], idx) => fn(acc, value, key, idx)

const fromMapping = {
  Array: (pred, reducer, functor) => [
    (acc, value, key) => reducer(acc, value, key),
    (acc, value, key) => pred(acc, value, key),
    functor,
  ],
  Object: (pred, reducer, functor) => [
    commonFN(reducer),
    commonFN(pred),
    toPairs_(functor),
  ],
  Map: (pred, reducer, functor) => [
    commonFN(reducer),
    commonFN(pred),
    toPairs_(functor),
  ],
  Set: (pred, reducer, functor) => [
    (acc, [, value], idx) => reducer(acc, value, idx),
    (acc, [, value], idx) => pred(acc, value, idx),
    toPairs_(functor),
  ],

  String: (pred, reducer, functor) => [
    commonFN(reducer),
    commonFN(pred),
    toPairs_(functor.split('')),
  ],
}

export default (pred, reducer, initial, functor) => {
  if (!isDefined_(functor)) return initial
  const type = type_(functor)

  if (!isEnumerable_(functor)) {
    throw new Error(`reduceWhile cant reduce ${type}`)
  }

  let fn, predfn
  ;[fn, predfn, functor] = fromMapping[type](pred, reducer, functor)

  const length = functor.length
  let b = initial

  for (let i = 0; i < length; ++i) {
    const a = functor[i]
    if (!predfn(b, a, i)) break
    b = fn(b, a, i)
  }

  return b
}
