

import {curry2} from '../curry'
export const has_=(prop, obj) =>obj.hasOwnProperty(prop)

export default curry2(has_)
