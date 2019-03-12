import {isObject} from './isObject'
import complementOne_ from './_internal/complementOne_'

export const isNotObject_ = complementOne_(isObject)
export const isNotObject = isNotObject_
export default isNotObject
