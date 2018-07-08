import reduce_ from "./reduce_"
import omitKey_ from './omitKey_'
import is_ from './is_'

export default (keys, obj) => {
  if (is_('String', keys)) {
    keys = keys.trim().split(',')
  }

  return is_("Array",keys)? reduce_(
    (acc, key) => omitKey_(key, acc),
    obj,
    keys
  ): obj
}
