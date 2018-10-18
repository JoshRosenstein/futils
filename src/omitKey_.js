import reduce_ from './reduce_'
import attach_ from './attach_'
import empty_ from './empty_'

export default (key, keyedList) =>
  reduce_(
    (accumulated, value, k) =>
      key === k ? accumulated : attach_(k, value, accumulated),
    empty_(keyedList),
    keyedList,
  )
