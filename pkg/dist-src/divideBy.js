import { divide_ } from './divide';
import flip2 from './_internal/flip2';
import { curry2_ } from './_internal/curry2_';
export const divideBy_ = flip2(divide_);
export const divideBy = curry2_(divideBy_);
export default divideBy;
//# sourceMappingURL=divideBy.js.map