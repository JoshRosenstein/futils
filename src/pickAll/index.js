import { mergeRight_ } from "../mergeRight"
import { reduceValues_ } from "../reduceValues"
import { objectFrom_ } from "../objectFrom"
import { prop_ } from "../prop"
import empty from "../empty"
import { curry2 } from "../curry"

export const pickAll_ = (keys, keyedEnumerable) => {
  return reduceValues_(
    (accumulated, key) =>
      mergeRight_(accumulated, objectFrom_([key], prop_(key, keyedEnumerable))),
    empty(keyedEnumerable),
    keys
  )
}

export default curry2(pickAll_)
