import { curry3_ } from './_internal/curry3_';
import { evolve_ } from './evolve';
import { identity_ } from './identity';

export const xfrm_ = (xfrms, val, key) => {
  let f = xfrms[key] || identity_;
  return typeof f === 'object' ? evolve_(f, val) : f(val);
};
export const xfrm = curry3_(xfrm_);

export default xfrm;
