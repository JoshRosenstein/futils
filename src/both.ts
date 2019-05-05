import { curry2_ } from './_internal/curry2_';
import { isFunction } from 'typed-is';

export const both_ = (f, g) =>
  isFunction(f) ? (...args) => f(...args) && g(...args) : f && g;

export const both = curry2_(both_);

export default both_;
