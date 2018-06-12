import type from "../type"
import { curry2 } from "../curry"

export const is_ = (sig, value) =>
  sig === "null"
    ? value === null
    : sig === "undefined"
      ? value === undefined
      : value === undefined || value === null ? false : type(value) === sig

export default curry2(is_)
