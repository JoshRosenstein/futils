import fnOrError_ from './fnOrError_'

const concat = (f, ...args) => f.concat(...args)


const notFnErrPrefix = '`fn` in `curry(fn, ...args)`'
const curryN = (executeArity, fn, ...curriedArgs) => (...args) => {
  const concatedArgs = concat(curriedArgs, args)
  return !(concatedArgs.length >= executeArity || !executeArity)
    ?  curryN(...concat([executeArity, fnOrError_(notFnErrPrefix, fn)], concatedArgs))
    :  fnOrError_(notFnErrPrefix, fn)(...concatedArgs)
}

export default curryN
