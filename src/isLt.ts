import { curry2_ } from './_internal/curry2_';
import { flip2 } from './_internal/flip2';
import { lt_ } from './lt';

export const isLt_ = flip2(lt_);
export const isLt = curry2_(isLt_);

export default isLt;
