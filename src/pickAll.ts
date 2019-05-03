import {curry2_} from './_internal/curry2_'
import {merge_} from './merge'
import {reduceValues_} from './reduceValues'
import {objOf_} from './objOf'
import {prop_} from './prop'
import {empty_} from './empty'

export type PickAll={
  <T, K extends string>(props: K[], obj: T): {[P in K]:P extends keyof T? T[P]:undefined}
  <T, U>(props: string[], obj: T): U
  (props: string[]): <T, U>(obj: T) => U
}

export const pickAll_ = (keys, keyedEnumerable) =>
  reduceValues_(
    (acc, key) => merge_(acc, objOf_(key, prop_(key, keyedEnumerable))),
    empty_(keyedEnumerable),
    keys,
  )
export const pickAll:PickAll = curry2_(pickAll_)
export default pickAll
