import reduceValues_ from './reduceValues_'
import attach_ from './attach_'
import reverse_ from './reverse_'
import splitWhenNoSpace_ from './splitWhenNoSpace_'

export default (keys, value) =>
  reduceValues_(
    (acc, key) => attach_(key, acc, {}),
    value,
    reverse_(splitWhenNoSpace_(keys, '.')),
  )
