import {append_} from './append'
import reduceKeys_ from './reduceKeys_'

export const keys_ = keyedObj =>
  reduceKeys_((acc, key) => append_(key, acc), [], keyedObj)

export default keys_
