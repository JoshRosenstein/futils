import type_ from './type_'


export default (value, orderedList) => {
  switch (type_(orderedList)) {
  case 'String': {
    return `${value}${orderedList}`
  }
  case 'Array': {
    return [value, ...orderedList]
  }
  default: {
    throw new Error(
      `prepend doesn't know how to deal with ${type_(orderedList)}`
    )
  }
  }
}
