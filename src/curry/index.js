import type from "../type";

import fnOrError from "../fnOrError";
import { concat, length, apply } from "../JS";

const notFnErrPrefix = "`fn` in `curry(fn, ...args)`";

export const curryN = (executeArity, fn, ...curriedArgs) => {
  return (...args) => {
    let concatedArgs = concat(curriedArgs, args),
      canBeCalled = length(concatedArgs) >= executeArity || !executeArity;
    return !canBeCalled
      ? apply(
          curryN,
          concat([executeArity, fnOrError(notFnErrPrefix, fn)], concatedArgs)
        )
      : apply(fnOrError(notFnErrPrefix, fn), concatedArgs);
  };
};

export const curry = (fn, ...argsToCurry) =>
  curryN(fnOrError(notFnErrPrefix, fn).length, fn, ...argsToCurry);

export const curry2 = fn => curryN(2, fn);
export const curry3 = fn => curryN(3, fn);
export const curry4 = fn => curryN(4, fn);
export const curry5 = fn => curryN(5, fn);
export default curry;
