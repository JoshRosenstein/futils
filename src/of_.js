import type_ from './type_'

export default (key, value, functor) => {
  switch (type_(functor)) {
    case 'Array': {
      return [value]
    }
    case 'Object': {
      return {[key]: value}
    }
    case 'Set': {
      return new Set([value])
    }
    case 'Map': {
      return new Map([[key, value]])
    }
    case 'String': {
      return `${value}`
    }

    default: {
      throw new Error(`of doesn't know how to type ${type_(functor)}`)
    }
  }
}
