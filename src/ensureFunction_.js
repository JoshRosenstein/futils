import isFunction_ from './isFunction_'

export default v => (isFunction_(v) ? v : () => v)
