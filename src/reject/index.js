import {curry2} from '../curry'
import filter from '../filter'
import complement from '../complement'
const reject_ = (fn, list) =>
  filter(v => !fn(v),list)

export default curry2(reject_)
