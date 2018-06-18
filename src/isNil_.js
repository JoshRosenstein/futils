import is_ from "./is_"

export default value => is_("undefined", value) || is_("null", value)
