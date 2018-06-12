import { reduceValues_ } from "../reduceValues"
import empty from "../empty"
import { prepend_ } from "../prepend"

export default orderedList =>
  reduceValues_((acc, v) => prepend_(v, acc), empty(orderedList), orderedList)
