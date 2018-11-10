import curry2_ from './_internal/curry2_'
import {empty_} from './empty'
import {keys_} from './keys'
import {prop_} from './prop'
import {uniq_} from './uniq'
import {type_} from './type'
import {attach_} from './attach'
import {reduce_} from './reduce'

export const zip_ = (left, right) => {
  if (type_(left) !== type_(right)) {
    throw new Error('left and right were not the same functor type_')
  }

  return reduce_(
    (acc, point) =>
      attach_(point, [prop_(point, left), prop_(point, right)], acc),
    empty_(right),
    uniq_([...keys_(left), ...keys_(right)]),
  )
}
export const zip = curry2_(zip_)

export default zip
