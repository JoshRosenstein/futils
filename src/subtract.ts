import { curry2_ } from './_internal/curry2_';

export const subtract_ = (a, b) => Number(a) - Number(b);
export const subtract = curry2_(subtract_);
export default subtract;
