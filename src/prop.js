import curry2_ from './_internal/curry2_'
import {isNil} from './isNil'

export const prop_ = (name, keyedFunctor) => {
  if (isNil(keyedFunctor)) {
    return keyedFunctor
  }

  if (keyedFunctor.get) {
    return keyedFunctor.get(name)
  }

  return keyedFunctor[name]
}
export const prop = curry2_(prop_)
export default prop
