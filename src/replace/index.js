import { curry3 } from "../curry"

export const replace_ = (regex, replacer, str) => {
  return str.replace(regex, replacer)
}

export default curry3(replace_)
