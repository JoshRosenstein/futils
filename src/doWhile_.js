export default function doWhile_(cond, fn, val) {
  return cond(val) ? doWhile_(cond, fn, fn(val)) : val
}
