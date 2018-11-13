// @flow
import {curry3_} from './_internal/curry3_'
import isBoolean from './isBoolean'
export const when_ = (condition, whenTrueFn, input) =>
  (isBoolean(condition)
  ? condition
  : condition(input))
    ? whenTrueFn(input)
    : input

export const when = curry3_(when_)

export default when
