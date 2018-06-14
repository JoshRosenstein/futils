import append_ from '../_uncurried/append_'
import { reduceKeys_ } from "../reduceKeys"

export default keyedObj =>
  reduceKeys_((acc, key) => append_(key, acc), [], keyedObj)
