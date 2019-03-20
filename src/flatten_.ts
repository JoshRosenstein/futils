import {reduce_} from './reduce'
import {merge_} from './merge'
import {empty_} from './empty'
import {type_} from './type'
import {is_} from './is'
import {of_} from './of'

export default (functor, recursive = true) => {
  const reducer = (subFuc, init = empty_(functor)) =>
    reduce_(
      (acc, value, key) => {
        if (is_(type_(init), value)) {
          return recursive ? reducer(value, acc) : merge_(acc, value)
        }
        return merge_(acc, of_(key, value, init))
      },
      init,
      subFuc,
    )

  return reducer(functor)
}
