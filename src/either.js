// @flow
import either_ from './either_'
import curry2_ from './curry2_'
import type {FunctionBoolType} from 'types'

type Either = ((
  funcA: FunctionBoolType,
  funcB: FunctionBoolType,
) => FunctionBoolType) &
  ((funcA: FunctionBoolType) => (funcB: FunctionBoolType) => FunctionBoolType)

const either: Either = curry2_(either_)

export default either
