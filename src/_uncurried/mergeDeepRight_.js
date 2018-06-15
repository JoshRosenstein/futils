import merge_ from "./merge_"
import mergeWith_ from "./mergeWith_"
import isObject_ from "./isObject_"
import isArray_ from "./isArray_"


const mergeDeepRight_=(left, right) => {
  if (isArray_(left) && isArray_(right)) {
    return merge_(left, right)
  }

  if (isObject_(left) && isObject_(right)) {
    return mergeWith_(mergeDeepRight_, left, right)
  }

  return right
}
export default mergeDeepRight_
