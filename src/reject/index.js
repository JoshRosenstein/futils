import {curry2} from '../curry'
import {filter_} from '../filter'
const reject_ = (fn, list) =>
  filter_(v => !fn(v),list)

export default curry2(reject_)
