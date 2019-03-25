import {isFunction} from 'typed-is/lib/isFunction'
import {isNil} from 'typed-is/lib/isNil'
import {isString} from 'typed-is/lib/isString'

export interface ToPairs_ {
  (und: undefined): []
  (string: string): [number, string][]
  <T>(array: T[]): [number, T][]
  <T, K extends string>(Object: Record<K, T>): [K, T][]
  <T>(set: Set<T>): [T, T][]
  <T, K>(map: Map<K, T>): [K, T][]

  <T, K extends string>(objectOrString: Record<K, T> | string):
    | [K, T][]
    | [number, string][]
  <T, K extends string>(
    value: string | T[] | Set<T> | Map<K, T> | Record<K, T>,
  ): [string, T][] | [number, string][] | [T, T][] | [K, T][]
}

export const toPairs_ = (value => {
  if (isNil(value)) {
    return [] //as ToPairs_<T>;
    // throw new Error(`toPairs doesn't know how to handle ${type_(value)}`)
  }
  if (isString(value)) {
    return toPairs_([...value]) //as ToPairs_<T>;
  }

  if (isFunction(value['entries'])) {
    return [...value.entries()] //as ToPairs_<T>;
  }

  return Object.entries(value) //as ToPairs_<T>;
}) as ToPairs_

export const toPairs = toPairs_
export default toPairs
