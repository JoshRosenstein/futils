 // ROSEYS TS
import {Morphism, Predicate } from './_types/ts/$types'

export declare type When_ = {
  <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>, value: T): when_111<T, U>;
}
export declare type When ={
  <T>(pred: Predicate<T>): when_100<T>;
  <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>): when_110<T, U>;
  <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>, value: T): when_111<T, U>;
}
export declare var when_: When_
export declare var when: When
export default when

type when_100<T> = {
  <U>(whenTrueFn: Morphism<T, U>): when_110<T, U>;
  <U>(whenTrueFn: Morphism<T, U>, value: T): when_111<T, U>;
};
type when_110<T, U> = {
  (value: T): when_111<T, U>;
};
type when_111<T, U> = T | U;
