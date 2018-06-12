import { is_ } from "../is"

export default value => is_("undefined", value) || is_("null", value)
