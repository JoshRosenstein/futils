import {curry2_} from './_internal/curry2_'
import {map_} from './map'
import {identity_} from './identity'
import isObject from './isObject'

export const evolve_ = (xfrms, obj) => {
  const evolveInner = (transforms, val, key) => {
    const transform = transforms[key] || identity_
    return isObject(transform) ? evolve_(transform, val) : transform(val)
  }
  return map_((v, k) => evolveInner(xfrms, v, k), obj)
}

export const evolve = curry2_(evolve_)

export default evolve
