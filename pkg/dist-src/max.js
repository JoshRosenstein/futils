import { curry2_ } from './_internal/curry2_';
import { toArray_ } from './toArray';
import { first_ } from './first';
export const max_ = (a, b) => first_([...toArray_(a), ...toArray_(b)].sort((a, b) => (a < b ? 1 : 0)));
export const max = curry2_(max_);
export default max;
