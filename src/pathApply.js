import {path_} from './path'
import {curry3_} from './_internal/curry3_'

export const pathApply_ = (paths = [], fn, obj = {}) => fn(path_(paths, obj))

export const pathApply = curry3_(pathApply_)

export default pathApply
