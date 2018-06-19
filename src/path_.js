import prop_ from "./prop_"
import reduceValues_ from "./reduceValues_"


export default (keys, tree) => {
  if (typeof keys === "string") {
    keys = keys.trim().split(".")
  }

  return reduceValues_((acc, val) => prop_(val, acc), tree, keys)
}
