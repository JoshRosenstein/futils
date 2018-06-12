import isNil from "../isNil"
import { is_ } from "../is"
import type from "../type"

const _quote = s => {
  var escaped = s
    .replace(/\\/g, "\\\\")
    .replace(/[\b]/g, "\\b") // \b matches word boundary; [\b] matches backspace
    .replace(/\f/g, "\\f")
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/\t/g, "\\t")
    .replace(/\v/g, "\\v")
    .replace(/\0/g, "\\0")

  return '"' + escaped.replace(/"/g, '\\"') + '"'
}

export default value => {
  if (value === null) {
    return "null"
  }

  if (value === undefined) {
    return "undefined"
  }

  if (is_("String", value)) {
    return _quote(value)
  }

  return !isNil(value) && typeof value.toString === "function"
    ? value.toString()
    : Object.prototype.toString.apply(value)
}
//export default _toString;
