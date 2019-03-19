import { lt_ } from './lt';
import { flip2 } from './_internal/flip2';
import { curry2_ } from './_internal/curry2_';
export const isLt_ = flip2(lt_);
export const isLt = curry2_(isLt_);
export default isLt;
