import {curry2_} from './_internal/curry2_'
import {reduceValues_} from './reduceValues'
import {attach_} from './attach'
import {prop_} from './prop'
import {empty_} from './empty'
import {isNil_} from './isNil'
import {splitWhenNoSpace_} from './_internal/splitWhenNoSpace_'


export type PickT={
  <T, K extends string>(names: Array<K>, obj: T): {[P in K]:P extends keyof T? T[P]:never }
  <K extends string>(names: Array<K>): <T>(obj: T) => Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;
}

export const pick_ = (keys, obj) =>
  reduceValues_(
    (acc, key) => {
      const v = prop_(key, obj)
      return isNil_(v) ? acc : attach_(key, v, acc)
    },
    empty_(obj),
    splitWhenNoSpace_(keys, ','),
  )

/**
* Returns a partial copy of an object containing only the keys specified.  If the key does not exist, the
* property is ignored.
*/
export const pick:PickT = curry2_(pick_)
export default pick
