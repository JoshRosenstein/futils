// @flow
import {curry3_} from './_internal/curry3_'
import isBoolean from './isBoolean'
export const when_: When_ = (condition, whenTrueFn, input) =>
  (isBoolean(condition)
  ? condition
  : condition(input))
    ? whenTrueFn(input)
    : input

export const when: When = curry3_(when_)

export default when

import {Morphism, Predicate} from './_types/$types'

export type When_ = {
  <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>, value: T): when_111<
    T,
    U
  >
}
export type When = {
  <T>(pred: Predicate<T>): when_100<T>
  <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>): when_110<T, U>
  <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>, value: T): when_111<
    T,
    U
  >
}

type when_100<T> = {
  <U>(whenTrueFn: Morphism<T, U>): when_110<T, U>
  <U>(whenTrueFn: Morphism<T, U>, value: T): when_111<T, U>
}
type when_110<T, U> = {
  (value: T): when_111<T, U>
}
type when_111<T, U> = T | U
