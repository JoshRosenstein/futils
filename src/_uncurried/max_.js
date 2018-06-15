
import toArray_ from "./toArray_"
import head_ from "./head_"

export default (a, b) =>
  head_([...toArray_(a), ...toArray_(b)].sort((a, b) => a < b))
