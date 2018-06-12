import {curry2} from '../curry'
import {filter_} from '../filter'

export const reject_ = (predicate, enumerable) => {
  if (enumerable.reject) {
    return enumerable.reject(predicate)
  }

  return filter_(v => !predicate(v),enumerable)
}
export default curry2(reject_)
