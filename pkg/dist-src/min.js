import { curry2_ } from './_internal/curry2_';
import { toArray_ } from './toArray';
import { first_ } from './first';
export const min_ = (l, r) => first_([...toArray_(l), ...toArray_(r)].sort((a, b) => (a > b ? 1 : 0)));
export const min = curry2_(min_);
export default min;
