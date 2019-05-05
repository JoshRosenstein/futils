import { curry2_ } from './_internal/curry2_';
import { flip2 } from './_internal/flip2';
import { gt_ } from './gt';

export const isGt_ = flip2(gt_);
export const isGt = curry2_(isGt_);

export default isGt;
