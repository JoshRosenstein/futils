import toPairs from "../toPairs"
import type from "../type"
import { curry4 } from "../curry"

export const reduceWhile_ = (pred,reducer, initial, functor) => {
  let fn
  switch (type(functor)) {
    case "Array":
      fn = (acc, value, key) => reducer(acc, value, key)
      break
    case "Object":
    case "Map":
      fn = (acc, [key, value]) => reducer(acc, value, key)
      functor = toPairs(functor)
      break
    case "Set":
      fn = (acc, [, value]) => reducer(acc, value)
      functor = toPairs(functor)
      break
    case "String":
      fn = (acc, [key, value]) => reducer(acc, value, key)
      functor = toPairs(functor.split(""))
      break

    default: {
      throw new Error(
        `reduce couldn't figure out how to reduce ${type(functor)}`
      )
    }
  }

  let res = initial
  let copy = [].concat(functor)
  while (copy.length && pred(res, copy[0])) res = fn(res, copy.shift())
  return res


}

export default curry4(reduceWhile_) 
