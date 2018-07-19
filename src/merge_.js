import type_ from './type_'
import isNil_ from './isNil_'

export default (left, right) => {
  if(isNil_(left)) return right
  if(isNil_(right)) return left
  if (type_(left) !== type_(right)) {
    throw new Error(
      `merge received a ${type_(left)} and ${type_(
        right
      )} which aren't the same`
    )
  }
  switch (type_(left)) {
  case 'Array': {
    return [...left, ...right]
  }

  case 'Object': {
    return {
      ...left,
      ...right
    }
  }

  case 'Map': {
    return new Map([...left, ...right])
  }

  case 'Set': {
    return new Set([...left, ...right])
  }

  case 'String': {
    return `${left}${right}`
  }

  default: {
    throw new Error(`merge doesn't know how to deal with ${type_(left)}`)
  }
  }
}
