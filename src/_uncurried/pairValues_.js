import mapValues_ from "./mapValues_"
import last_ from "./last_"

export default pairs => {
  return mapValues_(last_, pairs)
}
