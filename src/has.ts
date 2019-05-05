import { curry2_ } from './_internal/curry2_';

export const has_ = (prop, obj) =>
  Object.prototype.hasOwnProperty.call(obj, prop);
export const has = curry2_(has_);

export default has;
