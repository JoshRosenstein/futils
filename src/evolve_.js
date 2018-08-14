
import map from './map'
import identity_ from './identity_'
import isObject from './isObject'


const evolve_= (xfrms, obj) => {
  const evolveInner=(transforms, val, key) => {
    const transform = transforms[key] || identity_
    return isObject(transform)?evolve_(transform,val):transform(val)
  }
  return map((v,k)=>evolveInner(xfrms,v,k), obj)
}

export default evolve_
