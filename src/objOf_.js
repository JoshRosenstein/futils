import reduceValues_ from './reduceValues_'
import attach_ from './attach_'
import reverse_ from './reverse_'
import toArray_ from './toArray_'

export default (keys, value) =>{
  if (typeof keys === 'string') {
    keys = keys.trim().split('.')
  }
  return reduceValues_(
    (acc, key) => attach_(key, acc, {}),
    value,
    reverse_(toArray_(keys))
  )
}
