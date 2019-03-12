import {lens_} from './lens'
import {assoc_} from './assoc'

export const lensIndex_ = k => lens_(xs => xs[k], (v, o) => assoc_(k, v, o))

export const lensIndex = lensIndex_

export default lensIndex
