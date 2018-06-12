import type from "../type";
import { curry2 } from "../curry";
import {merge_} from '../merge'

export const mergeLeft_ = (left, right) => merge_(right,left)

export default curry2(mergeLeft_);
