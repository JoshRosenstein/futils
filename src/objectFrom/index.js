import { reduceValues_ } from "../reduceValues"
import { attach_ } from "../attach"
import reverse from "../reverse"
import { curry2 } from "../curry"
import toArray from '../toArray'
export const objectFrom_ = (keychain, value) =>
   reduceValues_(
    (accumulated, key) => attach_(key, accumulated, {}),
    value,
    reverse( toArray(keychain))
  )

export default curry2(objectFrom_)
