// @flow

//declare function complementOne_<T>(fn: (T) => boolean): T => boolean

// function complementOne_(fn) {
//   return function(arg) {
//     !fn(arg)
//   }
// }

const complementOne_: ((any) => boolean) => any => boolean = fn => arg =>
  !fn(arg)
export default complementOne_
