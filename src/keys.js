import {append_} from './append'
import {reduceKeys_} from './reduceKeys'

export const keys_ = keyedObj =>
  reduceKeys_((acc, key) => append_(key, acc), [], keyedObj)
export const keys = keys_
export default keys
