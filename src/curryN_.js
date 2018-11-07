// @flow

function curryN_<T: Array<any>, A: (...args: T) => any>(
  n: number,
  f: A,
): Function {
  return n < 1
    ? f
    : (...args: T) => {
        const left = n - args.length

        return left > 0 ? curryN_(left, f.bind(null, ...args)) : f(...args)
      }
}

// const curryN_ = (
//   numOfArgs: number,
//   fn: Function,
//   ...args: Array<*>
// ): Function =>
//   args.length >= numOfArgs
//     ? fn(...args)
//     : curryN_.bind(null, numOfArgs, fn, ...args)

export default curryN_
