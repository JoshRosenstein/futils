import reduce_ from './reduce_'
import omitKey_ from './omitKey_'
import splitWhenNoSpace_ from './splitWhenNoSpace_'

export default (keys, obj) =>
  reduce_((acc, key) => omitKey_(key, acc), obj, splitWhenNoSpace_(keys, ','))
