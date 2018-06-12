import type from "../type"
import { curry2 } from "../curry"

export const prepend_ = (value, orderedList) => {
  switch (type(orderedList)) {
    case "String": {
      return `${value}${orderedList}`
    }
    case "Array": {
      return [value, ...orderedList]
    }
    default: {
      throw new Error(
        `prepend doesn't know how to deal with ${type(orderedList)}`
      )
    }
  }
}

export default curry2(prepend_)
