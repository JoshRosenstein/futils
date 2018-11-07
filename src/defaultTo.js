// @flow
import defaultTo_ from './defaultTo_'
import curry2_ from './curry2_'

type DefaultTo = (<T, V>(d: T, x: ?V) => V | T) & (<T, V>(d: T, x: ?V) => V | T)

const defaultTo: DefaultTo = curry2_(defaultTo_)

export default defaultTo
