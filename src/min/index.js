import { curry2 } from "../curry"
import toArray from "../toArray"
import head from "../head"

export const min_ = (a, b) =>
  head([...toArray(a), ...toArray(b)].sort((a, b) => a > b))

export default curry2(min_)
