
// curryN :: Number -> ((a, b, ...) -> z) -> a -> b -> ... -> z
const curryN_ = (n, f) =>
  n < 1 ? f : (...args) => {
    const left = n - args.length

    return left > 0
      ? curryN_(left, f.bind(null, ...args))
      : f(...args)
  }

export default curryN_
