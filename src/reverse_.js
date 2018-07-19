import reduceValues_ from './reduceValues_'
import empty_ from './empty_'
import prepend_ from './prepend_'

export default orderedList => reduceValues_((acc, v) => prepend_(v, acc), empty_(orderedList), orderedList)
