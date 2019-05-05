import { curry2_ } from './_internal/curry2_';
import { identity_ } from './identity';
import { isPlainObject } from 'typed-is';
import { map_ } from './map';

export const evolve_ = (xfrms, obj) => {
  const evolveInner = (transforms, val, key) => {
    const transform = transforms[key] || identity_;
    return isPlainObject(transform) ? evolve_(transform, val) : transform(val);
  };
  return map_((v, k) => evolveInner(xfrms, v, k), obj);
};

export const evolve = curry2_(evolve_);

export default evolve;
