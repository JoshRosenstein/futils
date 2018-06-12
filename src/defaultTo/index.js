

import {curry2} from "../curry";

const defaultTo_ = (def, val) => (val == null || isNaN(val) ? def : val)
export default curry2(defaultTo_)
