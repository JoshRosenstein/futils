import curry2_ from './curry2_'
export const apply_ = (fn, arg) => fn(...arg)
export const apply = curry2_(apply_)
export default apply
