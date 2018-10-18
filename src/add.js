// @flow
import add_ from './add_'
import curry2_ from './curry2_'
//declare var add: CurriedFunction2<number, number, number>
//declare function add(a: number): (b: number) => number
//declare function add(a: number, b: number): number

//declare var add ((a: number) => (b: number) => number) & ((a: number, b: number) => number)

const add: ((a: number) => (b: number) => number) &
  ((a: number, b: number) => number) = curry2_(add_)

export default add

// export default function add(a, b) {
//   if (arguments.length === 1) {
//     return a => add_(a, b) //function isValue(vHolder:any):boolean{return is_(sig, vHolder)}
//   }
//   return add_(a, b)
// }
