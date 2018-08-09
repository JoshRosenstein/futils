import unapply_ from './unapply_'
import partial_ from './partial_'


// curryN :: Number -> ((a, b, ...) -> z) -> a -> b -> ... -> z
const curryN_ = (n, f) =>
  n < 1 ? f : unapply_(args => {
    const left = n - args.length
    return left > 0
      ? curryN_(left, partial_(f, args))
      : f(...args) 
  })

export default curryN_
