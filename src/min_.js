import toArray_ from "./toArray_"
import head_ from "./head_"

export default (l, r) =>
  head_([...toArray_(l), ...toArray_(r)].sort((a, b) => a > b))
