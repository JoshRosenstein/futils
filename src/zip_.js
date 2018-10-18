import empty_ from './empty_'
import keys_ from './keys_'
import key_ from './prop'
import uniq_ from './uniq_'
import type_ from './type_'
import attach_ from './attach_'
import reduce_ from './reduce_'

export default (left, right) => {
  if (type_(left) !== type_(right)) {
    throw new Error('left and right were not the same functor type_')
  }

  return reduce_(
    (acc, point) =>
      attach_(point, [key_(point, left), key_(point, right)], acc),
    empty_(right),
    uniq_([...keys_(left), ...keys_(right)]),
  )
}
