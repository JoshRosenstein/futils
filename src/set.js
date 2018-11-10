import {curry3_} from './curry3_'
import {identityFunc_} from './identityFunc_'

export const set_ = (lens, value, x) =>
  lens(() => identityFunc_(value))(x).value

export const set = curry3_(set_)
export default set
