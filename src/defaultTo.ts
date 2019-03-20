import {curry2_} from './_internal/curry2_'

export declare type DefaultTo_ = {
  <T>(defaults: T, value: null | undefined): defaultTo_void_11<T>
  <T, U>(defaults: T, value: U | null | undefined): defaultTo_general_11<T, U>
}

export declare type DefaultTo = {
  <T>(defaults: T): defaultTo_10<T>
  <T>(defaults: T, value: null | undefined): defaultTo_void_11<T>
  <T, U>(defaults: T, value: U | null | undefined): defaultTo_general_11<T, U>
}

type defaultTo_10<T> = {
  (value: null | undefined): defaultTo_void_11<T>
  <U>(value: U | null | undefined): defaultTo_general_11<T, U>
}
type defaultTo_void_11<T> = T
type defaultTo_general_11<T, U> = T | U

export const defaultTo_: DefaultTo_ = (d, v) => (v == null || v !== v ? d : v)
export const defaultTo: DefaultTo = curry2_(defaultTo_)

export default defaultTo
