import toPairs_ from './toPairs_'
import type_ from './type_'
import isEnumerable_ from './isEnumerable_'
const commonFN = fn => (acc, [key, value]) => fn(acc, value, key)

const fromMapping = {
  Array: (reducer, functor) => [
    (acc, value, key) => reducer(acc, value, key),
    functor,
  ],
  Object: (reducer, functor) => [commonFN(reducer), toPairs_(functor)],
  Map: (reducer, functor) => [commonFN(reducer), toPairs_(functor)],
  Set: (reducer, functor) => [
    (acc, [, value]) => reducer(acc, value),
    toPairs_(functor),
  ],

  String: (reducer, functor) => [
    commonFN(reducer),
    toPairs_(functor.split('')),
  ],
}

export default (reducer, initial, functor, right = false) => {
  const type = type_(functor)

  if (!isEnumerable_(functor)) {
    throw new Error(`reduce cant reduce ${type}`)
  }

  let fn
  ;[fn, functor] = fromMapping[type](reducer, functor)

  if (!right) {
    return functor.reduce(fn, initial)
  }

  let idx = functor.length - 1
  while (idx >= 0) {
    initial = fn(functor[idx], initial)
    idx -= 1
  }
  return initial
}
