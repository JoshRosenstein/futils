import is_ from "./is_"

export default value => {
  if (is_("Array", value)) {
    return value
  }

  return [value]
}
