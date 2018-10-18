import isBoolean from './isBoolean'

export default (condition, whenTrueFn, input) =>
  (isBoolean(condition)
  ? condition
  : condition(input))
    ? whenTrueFn(input)
    : input
