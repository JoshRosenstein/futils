import isString_ from './isString_'
import toArray_ from './toArray_'
import split_ from './split_'

export default (keys,delim) => isString_(keys)?/\s/g.test(keys)?[keys]:split_(delim,keys):toArray_(keys)
