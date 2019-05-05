import { isFunction } from './isFunction';

export const whenFunctionCallWith_ = (...args) => (fnOrVal) =>
  isFunction(fnOrVal) ? fnOrVal(...args) : fnOrVal;

export const whenFunctionCallWith = whenFunctionCallWith_;
export default whenFunctionCallWith;
