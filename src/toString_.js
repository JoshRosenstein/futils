import type_ from './type_'
import isFunction from './isFunction'

export default value => {
  const t = type_(value)
  if (t === 'null' || t === 'undefined') {
    return t
  }
  if (t === 'String') {
    return value
  }

  return isFunction(value.toString)
    ? value.toString()
    : Object.prototype.toString.apply(value)
}
