// // flow
// import add_ from './add_'
// import curry2_ from './curry2_'

// const add: ((a: number) => (b: number) => number) &
//   ((a: number, b: number) => number) = curry2_(add_)

// export default add

import curry2_ from './curry2_'
import add_ from './add_'

export default curry2_(add_)
