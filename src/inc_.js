import replace_ from './replace_'
import isString from './isString'

export default x => {
  const xx = parseFloat(x)
  return !xx ? x : isString(x) ? replace_(`${xx}`, `${xx + 1}`, x) : xx + 1
}
// export default (v)=>add_(-1,v)
