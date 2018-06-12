import { append_ } from "../append"
import { reduceKeys_ } from "../reduceKeys"

export default keyedObj =>
  reduceKeys_((acc, key) => append_(key, acc), [], keyedObj)
