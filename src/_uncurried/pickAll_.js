import merge_ from "./merge_"
import reduceValues_ from "./reduceValues_"
import objOf_ from "./objOf_"
import prop_ from "./prop_"
import empty_ from "./empty_"


export default (keys, keyedEnumerable) => {
  return reduceValues_(
    (acc, key) =>
      merge_(acc, objOf_(key, prop_(key, keyedEnumerable))),
    empty_(keyedEnumerable),
    keys
  )
}
