import { reduceValues_ } from "../reduceValues"
import { attach_ } from "../attach"
import reverse from "../reverse"
import { curry2 } from "../curry"
import toArray from "../toArray"
export const objOf_ = (keychain, value) =>
  reduceValues_(
    (accumulated, key) => attach_(key, accumulated, {}),
    value,
    reverse(toArray(keychain))
  )

export default curry2(objOf_)
