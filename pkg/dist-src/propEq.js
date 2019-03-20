import { curry3_ } from './_internal/curry3_';
import { prop_ } from './prop';
import { equals_ } from './equals';
export const propEq_ = (name, v, obj) => equals_(v, prop_(name, obj));
export const propEq = curry3_(propEq_);
export default propEq;
//# sourceMappingURL=propEq.js.map