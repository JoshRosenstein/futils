import {replace_} from './replace'
import isString from './isString'

export const dec_ = x => {
  const xx = parseFloat(x)
  return !xx ? x : isString(x) ? replace_(`${xx}`, `${xx - 1}`, x) : xx - 1
}
export const dec = dec_

export default dec
