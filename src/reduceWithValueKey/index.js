import toPairs from "../toPairs"
import type from "../type"
import { curry3 } from "../curry"

export const reduceWithValueKey_ = (reducer, initial, functor) => {
  switch (type(functor)) {
    case "Array": {
      return functor.reduce(
        (acc, value, key) => reducer(acc)(value)(key),
        initial
      )
    }
    case "Object": {
      return toPairs(functor).reduce(
        (acc, [key, value]) => reducer(acc)(value)(key),
        initial
      )
    }
    case "Set": {
      return toPairs(functor).reduce(
        (acc, [, value]) => reducer(acc)(value)(),
        initial
      )
    }
    case "Map": {
      return toPairs(functor).reduce(
        (acc, [key, value]) => reducer(acc)(value)(key),
        initial
      )
    }
    case "String": {
      return toPairs(functor.split("")).reduce(
        (acc, [key, value]) => reducer(acc)(value)(key),
        initial
      )
    }
    default: {
      throw new Error(
        `reduceWithValueKey couldn't figure out how to reduce ${type(functor)}`
      )
    }
  }
}

export default curry3(reduceWithValueKey_)
