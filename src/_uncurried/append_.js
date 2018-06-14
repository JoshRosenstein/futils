import type_ from "./type_"


export default (value, orderedList) => {
  switch (type_(orderedList)) {
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
