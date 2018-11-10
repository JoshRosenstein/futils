import isFunction_ from './isFunction_'

export const ensureFunction_ = v => (isFunction_(v) ? v : () => v)
export const ensureFunction = ensureFunction_
export default ensureFunction
