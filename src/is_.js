import type_ from './type_'


export default (sig, value) =>
{
  if (typeof sig ==='string') {
    return type_(value) === sig}
  if (value === undefined || value === null) {
    return false
  }
  return value.constructor === sig || value instanceof sig
}
