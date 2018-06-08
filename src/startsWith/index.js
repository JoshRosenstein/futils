import { curry2 } from "../curry"
import test from "../test"
const escapeString = str => {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string")
  }
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
}
export const startsWith_ = (subset, set) =>
  test(new RegExp(`^${escapeString(subset)}`))(set)

export default curry2(startsWith_)
