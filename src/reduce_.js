import toPairs_ from './toPairs_'
import type_ from './type_'


export default (reducer, initial, functor, right=false) => {
  let fn
  switch (type_(functor)) {
  case 'Array':
    fn = (acc, value, key) => reducer(acc, value, key)
    break
  case 'Object':
  case 'Map':
    fn = (acc, [key, value]) => reducer(acc, value, key)
    functor = toPairs_(functor)
    break
  case 'Set':
    fn = (acc, [, value]) => reducer(acc, value)
    functor = toPairs_(functor)
    break
  case 'String':
    fn = (acc, [key, value]) => reducer(acc, value, key)
    functor = toPairs_(functor.split(''))
    break

  default: {
    throw new Error(
      `reduce couldn't figure out how to reduce ${type_(functor)}`
    )
  }
  }
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
