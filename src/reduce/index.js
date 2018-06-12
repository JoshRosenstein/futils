import toPairs from "../toPairs"
import type from "../type"
import { curry3 } from "../curry"

export const reduce_ = (reducer, initial, functor, right) => {
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
  if (!right) {
    return functor.reduce(fn, initial)
  }

  var idx = functor.length - 1
  while (idx >= 0) {
    initial = fn(functor[idx], initial)
    idx -= 1
  }
  return initial
}

export default curry3((reducer, initial, functor) =>
  reduce_(reducer, initial, functor, false)
)
