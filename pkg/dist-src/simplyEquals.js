import { curry2_ } from './_internal/curry2_';
export const simplyEquals_ = (a, b) => a === b;
export const simplyEquals = curry2_(simplyEquals_);
export default simplyEquals;
