// @flow

import forEach_ from './forEach_'



declare function forEach<T, V>(fn: (x: T) => ?V, xs: Array<T>): Array<T>;
declare function forEach<T, V>(
  fn: (x: T) => ?V,
): (xs: Array<T>) => Array<T>;

export default function forEach (fn, arr) {
    if (arguments.length === 1) { return arrHolder => forEach_(fn, arrHolder) }
  
    return forEach_(fn, arr)
  }



//export default curry2_(forEach_)
