
import type_ from "./type_"

export default value => {
  const t= type_(value)
  if (t === 'null' || t === 'undefined') {
    return t
  }
  if (t === 'String') {
    return value
  }

  return  typeof value.toString === "function"
    ? value.toString()
    : Object.prototype.toString.apply(value)
}
