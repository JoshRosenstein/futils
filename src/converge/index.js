import { curry2 } from "../curry"
import curryN from "../curryN"

import { pluck_ } from "../pluck"

import { reduceValues_ } from "../reduceValues"

const converge = (after, fns) => {
  return curryN(
    reduceValues_((a, b) => (b > a ? b : a), 0, pluck_("length", fns)),
    function() {
      var args = arguments
      var context = this
      return after.apply(context, fns.map(fn => fn.apply(context, args)))
    }
  )
}

export default curry2(converge)
