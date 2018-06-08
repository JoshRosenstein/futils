import type from "../type"
import { curry2 } from "../curry"

const append_ = (value, orderedList) => {
  switch (type(orderedList)) {
    case "String": {
      return `${orderedList}${value}`
    }
    case "Array": {
      return [...orderedList, value]
    }

    default: {
      throw new TypeError(
        `append doesn't know how to deal with ${type(orderedList)}`
      )
    }
  }
}

export default curry2(append_)
