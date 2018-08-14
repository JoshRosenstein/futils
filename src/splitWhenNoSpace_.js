import isString_ from './isString_'
import toArray_ from './toArray_'

export default (keys,delim) => isString_(keys)?/\s/g.test(keys)?[keys]:keys.split(delim):toArray_(keys)
