import { curry4 } from "../curry"
const reduceWhile_ = (pred, fn, init, list) => {
  let res = init
  let copy = [].concat(list)
  while (copy.length && pred(res, copy[0])) res = fn(res, copy.shift())
  return res
}

export default curry4(reduceWhile_)
