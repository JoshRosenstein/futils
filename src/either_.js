//@flow
import type {FunctionBoolType} from 'types'

type Either_ = (
  funcA: FunctionBoolType,
  funcB: FunctionBoolType,
) => FunctionBoolType

export const either_: Either_ = (funcA, funcB) => (...args) =>
  funcA(...args) || funcB(...args)

export default either_
