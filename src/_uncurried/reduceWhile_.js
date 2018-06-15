import toPairs_ from "./toPairs_"
import type_ from "./type_"

export default (pred,reducer, initial, functor) => {
  let fn
  switch (type_(functor)) {
    case "Array":
      fn = (acc, value, key) => reducer(acc, value, key)
      break
    case "Object":
    case "Map":
      fn = (acc, [key, value]) => reducer(acc, value, key)
      functor = toPairs_(functor)
      break
    case "Set":
      fn = (acc, [, value]) => reducer(acc, value)
      functor = toPairs_(functor)
      break
    case "String":
      fn = (acc, [key, value]) => reducer(acc, value, key)
      functor = toPairs_(functor.split(""))
      break

    default: {
      throw new Error(
        `reduce couldn't figure out how to reduce ${type_(functor)}`
      )
    }
  }

  let res = initial
  let copy = [].concat(functor)
  while (copy.length && pred(res, copy[0])) res = fn(res, copy.shift())
  return res


}
