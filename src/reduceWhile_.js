import toPairs_ from './toPairs_'
import type_ from './type_'
import isDefined_ from './isDefined_'

export default (pred,reducer, initial, functor) => {
  if(!isDefined_(functor)) return initial
  let fn
  let predfn
  switch (type_(functor)) {
  case 'Array':
    fn = (acc, value, key) => reducer(acc, value, key)
    predfn = (acc, value, key) => pred(acc, value, key)
    break
  case 'Object':
  case 'Map':
    fn = (acc, [key, value],idx) => reducer(acc, value, key, idx)
    functor = toPairs_(functor)
    predfn = (acc, [key, value],idx) => pred(acc, value, key, idx)
    break
  case 'Set':
    fn = (acc, [, value],idx) => reducer(acc, value,idx)
    functor = toPairs_(functor)
    predfn = (acc, [, value],idx) => pred(acc, value, idx)
    break
  case 'String':
    fn = (acc, [key, value],idx) => reducer(acc, value, key,idx)
    functor = toPairs_(functor.split(''))
    predfn = (acc, [key, value],idx) => pred(acc, value, key, idx)
    break

  default: {
    throw new Error(
      `reduce couldn't figure out how to reduce ${type_(functor)}`
    )
  }
  }

  const length = functor.length
  let b = initial

  for (let i = 0; i < length; ++i) {
    const a = functor[i]
    if (!predfn(b, a, i)) break
    b = fn(b, a, i)
  }

  return b
}
