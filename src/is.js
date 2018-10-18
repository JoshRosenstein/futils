// @flow
import is_ from './is_'
import curry2_ from './curry2_'

//type Is = (string => any => boolean) & ((string, any) => boolean)
//declare var is: Is

const is: (string => mixed => boolean) & ((string, mixed) => boolean) = curry2_(
  is_,
)

export default is

// export default function is(sig, v) {
//   if (arguments.length === 1) {
//     return v => is_(sig, v) //function isValue(vHolder:any):boolean{return is_(sig, vHolder)}
//   }
//   return is_(sig, v)
// }

// export const a: boolean = is('number', 1)
//export const b: (v: mixed) => boolean = is('number')
