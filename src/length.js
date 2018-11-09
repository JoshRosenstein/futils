import isNil_ from './isNil_'
import values_ from './values_'

export const length_ = obj =>
  isNil_(obj) ? undefined : obj.length || obj.size || values_(obj).length

export const length = length_
export default length_
