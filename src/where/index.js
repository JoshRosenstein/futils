import { reduce_ } from "../reduce"
import { path_ } from "../path"
import toArray from "../toArray"
import { curry2 } from "../curry"

export const where_ = (matcher, keyedEnumerable) =>
  reduce_(
    (latest, value, key) =>
      latest && value(path_(toArray(key), keyedEnumerable)),
    true,
    matcher
  )

export default curry2(where_)
