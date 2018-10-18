import isArray_ from './isArray_'
import isNil_ from './isNil_'

export default v => (isNil_(v) ? [] : isArray_(v) ? v : [v])
