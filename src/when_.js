// @flow
import isBoolean from './isBoolean'

type UnaryPredicateFn<T> = (x: T) => boolean

// prettier-ignore
type When_=
  <T, V, S>(
    pred: UnaryPredicateFn<T>,
    fn: (x: S) => V,
    x: T | S
  )=> T | V;

const when_: When_ = (condition, whenTrueFn, input) =>
  (isBoolean(condition)
  ? condition
  : condition(input))
    ? whenTrueFn(input)
    : input

export default when_
