import { path_ } from "../path"
import { mapValues_ } from "../mapValues"
import { curry2 } from "../curry"
import toArray from "../toArray"

export const pluck_ = (p, obj) => mapValues_(x => path_(toArray(p), x), obj)

export default curry2(pluck_)
