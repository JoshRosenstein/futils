// @flow
import curry2_ from './curry2_'
import equals_ from './equals_'

const equals: (any => any => boolean) & ((any, any) => boolean) = curry2_(
  equals_,
)

export default equals
