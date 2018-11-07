// @flow
import divide_ from './divide_'
import curry2_ from './curry2_'

const divide: ((a: number) => (b: number) => number) &
  ((a: number, b: number) => number) = curry2_(divide_)

export default divide
