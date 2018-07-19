import type_ from './type_'
import fromIteratorToArray_ from './fromIteratorToArray_'

export default pairableObj => {
  switch (type_(pairableObj)) {
  case 'Array': {
    return pairableObj.reduce(
      (pairs, value, index) => [...pairs, [index, value]],
      []
    )
  }
  case 'Object': {
    return Object.entries(pairableObj)
  }
  case 'Set': {
    return fromIteratorToArray_(pairableObj.values()).map(value => [
      undefined,
      value
    ])
  }
  case 'Map': {
    return fromIteratorToArray_(pairableObj.entries())
  }

  default: {
    throw new Error(
      `toPairs doesn't know how to handle ${type_(pairableObj)}`
    )
  }
  }
}
