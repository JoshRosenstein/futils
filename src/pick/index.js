import { mergeRight_ } from "../mergeRight"
import { reduceValues_ } from "../reduceValues"
import { objectFrom_ } from "../objectFrom"
import { prop_ } from "../prop"
import empty from "../empty"
import { curry2 } from "../curry"

const pick = (keys, keyedEnumerable) => {
  return reduceValues_(
    (accumulated, key) => {
      const v = prop_(key, keyedEnumerable)
      return v ? mergeRight_(accumulated, objectFrom_([key], v)) : accumulated
    },
    empty(keyedEnumerable),
    keys
  )
}

export default curry2(pick)
