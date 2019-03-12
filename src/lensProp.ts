import {assoc_} from './assoc'
import {lens_} from './lens'
import {prop_} from './prop'

export const lensProp_ = k => lens_(o => prop_(k, o), (v, o) => assoc_(k, v, o))
export const lensProp = lensProp_

export default lensProp
