import {isNil, isArray} from 'typed-is'

export const toArray_ = v => (isNil(v) ? [] : isArray(v) ? v : [v])

export const toArray = toArray_

export default toArray
