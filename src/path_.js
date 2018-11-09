import prop_ from './prop_'
import reduceValues_ from './reduceValues_'
import splitWhenNoSpace_ from './splitWhenNoSpace_'

export default (keys, tree) =>
  reduceValues_(
    (acc, val) => prop_(val, acc),
    tree,
    splitWhenNoSpace_(keys, '.'),
  )
