import { is_ } from "../is"

export default value => {
  if (is_("Array", value)) {
    return value
  }

  return [value]
}
