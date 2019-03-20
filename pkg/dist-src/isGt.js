import { gt_ } from './gt';
import { flip2 } from './_internal/flip2';
import { curry2_ } from './_internal/curry2_';
export const isGt_ = flip2(gt_);
export const isGt = curry2_(isGt_);
export default isGt;
//# sourceMappingURL=isGt.js.map