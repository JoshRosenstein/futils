import {converge_} from './converge'
import argsToList from './argsToList'

export const juxt_ = fns => converge_(argsToList, fns)
export const juxt = juxt_
export default juxt
