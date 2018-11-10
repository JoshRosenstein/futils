import {curry2_} from './_internal/curry2_'
import {path_} from './path'
import {mapValues_} from './mapValues'

export const pluck_ = (p, obj) => mapValues_(x => path_(p, x), obj)
export const pluck = curry2_(pluck_)
export default pluck
