import curry2_ from './curry2_'
export const tap_ = (fn, value) => {
  fn(value)
  return value
}
const tap = curry2_(tap_)
export default tap
