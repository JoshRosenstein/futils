// @flow

import nth_ from './nth_'

declare function nth<V, T: Array<V>>(i: number, orderedList: T): ?V
declare function nth<V, T: Array<V> | string>(
  i: number,
): ((orderedList: string) => string) & ((orderedList: T) => ?V)
declare function nth<T: string>(i: number, orderedList: T): T

export default function nth(i, orderedList) {
  if (arguments.length === 1) {
    return i => nth_(i, orderedList)
  }
  return nth_(i, orderedList)
}
