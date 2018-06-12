

import {curry2} from "../curry";

export const defaultTo_ = (d, v) => v == null || v !== v ? d : v
export default curry2(defaultTo_)
