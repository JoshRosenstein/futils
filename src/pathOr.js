import {curry3_} from './curry3_'
import {path_} from './path'
import {defaultTo_} from './defaultTo'

export const pathOr_ = (d, p, obj) => defaultTo_(d, path_(p, obj))
export const pathOr = curry3_(pathOr_)
export default pathOr
