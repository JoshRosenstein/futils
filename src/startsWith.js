import {curry2_} from './curry2_'
import {take_} from './take'
import {equals_} from './equals'

export const startsWith_ = (prefix, list) =>
  equals_(take_(prefix.length, list), prefix)

export const startsWith = curry2_(startsWith_)

export default startsWith
