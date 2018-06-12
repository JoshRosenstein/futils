import { curry2 } from "../curry";


export const props_ = (keys, obj) => {
  if (typeof keys === "string") {
    keys = keys.trim().split(",")
  }

  if (!Array.isArray(keys)) return []

  var length = keys.length
  var result = Array(length)
  for (var i = 0; i < length; i++) {
    result[i] = obj[keys[i]]
  }
  return result
}

export default curry2(props_);
