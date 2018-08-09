
import curry from './curry'

export default   fn =>
  curry(
    (x, y, ...args) => fn(y, x, ...args)
  )
