import reduceValues_ from './reduceValues_'
import attach_ from './attach_'
import prop_ from './prop_'
import empty_ from './empty_'
import isNil_ from './isNil_'
import splitWhenNoSpace_ from './splitWhenNoSpace_'

export default (keys, obj) =>
  reduceValues_(
    (acc, key) => {
      const v = prop_(key, obj)
      return isNil_(v) ? acc : attach_(key, v, acc)
    },
    empty_(obj),
    splitWhenNoSpace_(keys, ','),
  )
