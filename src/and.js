// @flow
import curry2_ from './curry2_'
import and_ from './and_'

const and: (boolean => boolean => boolean) &
  ((boolean, boolean) => boolean) = curry2_(and_)

export default and
