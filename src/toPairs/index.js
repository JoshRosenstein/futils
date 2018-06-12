import type from "../type"
import fromIteratorToArray from "../fromIteratorToArray"

export default pairableObj => {
  switch (type(pairableObj)) {
    case "Array": {
      return pairableObj.reduce(
        (pairs, value, index) => [...pairs, [index, value]],
        []
      )
    }
    case "Object": {
      return Object.entries(pairableObj)
    }
    case "Set": {
      return fromIteratorToArray(pairableObj.values()).map(value => [
        undefined,
        value
      ])
    }
    case "Map": {
      return fromIteratorToArray(pairableObj.entries())
    }

    default: {
      throw new Error(
        `fromFunctorToPairs doesn't know how to handle ${type(pairableObj)}`
      )
    }
  }
}
