import { evolve_ } from './evolve';
import { curry3_ } from './_internal/curry3_';
import { identity_ } from './identity';
export const xfrm_ = (xfrms, val, key) => {
    let f = xfrms[key] || identity_;
    return typeof f === 'object' ? evolve_(f, val) : f(val);
};
export const xfrm = curry3_(xfrm_);
export default xfrm;
//# sourceMappingURL=xfrm.js.map