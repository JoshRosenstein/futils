import append_ from './append_'
import reduceKeys_ from './reduceKeys_'


export default keyedObj =>
  reduceKeys_((acc, key) => append_(key, acc), [], keyedObj)
