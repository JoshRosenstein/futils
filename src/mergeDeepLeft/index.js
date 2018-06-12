
import {mergeDeepRight_} from '../mergeDeepRight'
import { curry2 } from "../curry"

export const mergeDeepLeft_ = (left, right) => mergeDeepRight_(right,left)



export default curry2(mergeDeepLeft_);
