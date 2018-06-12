import type from "../type"
import { curry3 } from "../curry"

export const of_ = (key, value, functor) => {
  switch (type(functor)) {
    case "Array": {
      return [value]
    }
    case "Object": {
      return { [key]: value }
    }
    case "Set": {
      return new Set([value])
    }
    case "Map": {
      return new Map([[key, value]])
    }
    case "String": {
      return `${value}`
    }

    default: {
      throw new Error(`of doesn't know how to type ${type(functor)}`)
    }
  }
}

export default curry3(of_)
