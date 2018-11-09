import isArray_ from './isArray_'
import isNil_ from './isNil_'

export const toArray_ = v => (isNil_(v) ? [] : isArray_(v) ? v : [v])

export const toArray = toArray_

export default toArray
