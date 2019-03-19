import { isFunction } from './isFunction';
export const whenFunctionCallWith_ = (...args) => test => isFunction(test) ? test(...args) : test;
export const whenFunctionCallWith = whenFunctionCallWith_;
export default whenFunctionCallWith;
