import { curry2_ } from './_internal/curry2_';
export const and_ = (a, b) => a && b;
export const and = curry2_(and_);
export default and;
