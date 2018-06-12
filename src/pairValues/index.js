import { mapValues_ } from "../mapValues"
import last from "../last"

export default pairs => {
  return mapValues_(last, pairs)
}
