import { merge_ } from "../merge"
import { reduceValues_ } from "../reduceValues"
import { objOf_ } from "../objOf"
import { prop_ } from "../prop"
import empty from "../empty"
import { curry2 } from "../curry"

const pick = (keys, keyedEnumerable) => {
  return reduceValues_(
    (accumulated, key) => {
      const v = prop_(key, keyedEnumerable)
      return v ? merge_(accumulated, objOf_(key, v)) : accumulated
    },
    empty(keyedEnumerable),
    keys
  )
}

export default curry2(pick)
