import type from "../type"

import fnOrError from "../fnOrError"
import { concat, length, apply } from "../JS"
// function curry(fn) {
//   return (...xs) => {
//     if (xs.length === 0) {
//       throw Error("EMPTY INVOCATION");
//     }
//     if (xs.length >= fn.length) {
//       return fn(...xs);
//     }
//     return curry(fn.bind(null, ...xs));
//   };
// }

const notFnErrPrefix = "`fn` in `curry(fn, ...args)`"

export const curryN = (executeArity, fn, ...curriedArgs) => {
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

export const curry = (fn, ...argsToCurry) =>
  curryN(fnOrError(notFnErrPrefix, fn).length, fn, ...argsToCurry)

//export const curry2 = fn => curryN(2, fn)

export const curry2 = f => {
  return function curried(a, b) {
    return arguments.length >= 2 ? f(a, b) : b2 => f(a, b2)
  }
}

export const curry3 = f => {
  return function curried(a, b, c) {
    if (arguments.length >= 3) return f(a, b, c)
    if (arguments.length === 2) return c2 => f(a, b, c2)
    return function(b2, c2) {
      if (arguments.length === 2) return f(a, b2, c2)
      return c3 => f(a, b2, c3)
    }
  }
}
//export const curry3 = fn => curryN(3, fn)
export const curry4 = fn => curryN(4, fn)
export const curry5 = fn => curryN(5, fn)
export default curry
