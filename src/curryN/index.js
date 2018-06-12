import fnOrError from "../fnOrError"
import { concat, length, apply } from "../JS"

const notFnErrPrefix = "`fn` in `curry(fn, ...args)`"
const curryN = (executeArity, fn, ...curriedArgs) => {
  return (...args) => {
    let concatedArgs = concat(curriedArgs, args),
      canBeCalled = length(concatedArgs) >= executeArity || !executeArity
    return !canBeCalled
      ? apply(
          curryN,
          concat([executeArity, fnOrError(notFnErrPrefix, fn)], concatedArgs)
        )
      : apply(fnOrError(notFnErrPrefix, fn), concatedArgs)
  }
}

export default curryN
