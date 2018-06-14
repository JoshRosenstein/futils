import { is_ } from "../is"
import isEmpty from '../isEmpty'

export default value => is_("undefined", value) || is_("null", value) || isEmpty(value)
