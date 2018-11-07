// @flow
import curry2_ from './curry2_'
import round_ from './round_'

type roundT = ((precision: number, number: number) => number) &
  ((precision: number) => (number: number) => number)

const round: roundT = curry2_(round_)
export default round
