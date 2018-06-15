import reduceValues_ from "./reduceValues_"
import attach_ from "./attach_"
import reverse_ from "./reverse_"
import toArray_ from "./toArray_"

export default (keychain, value) =>
  reduceValues_(
    (acc, key) => attach_(key, acc, {}),
    value,
    reverse_(toArray_(keychain))
  )
