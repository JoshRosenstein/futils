import {assocPath_} from './assocPath'
import {lens_} from './lens'
import {path_} from './path'

export const lensPath_ = k =>
  lens_(o => path_(k, o), (v, o) => assocPath_(k, v, o))
export const lensPath = lensPath_

export default lensPath
