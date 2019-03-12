import {curry2_} from './_internal/curry2_'
import {merge_} from './merge'

export const mergeLeft_ = (left, right) => merge_(right, left)
export const mergeLeft = curry2_(mergeLeft_)

export default mergeLeft
