import {curryN_} from './curryN'
import {identityFunc_} from './_internal/identityFunc_'

export const over_ = (lens, fn, x) => lens(y => identityFunc_(fn(y)))(x).value
export const over = curryN_(3, over_)
export default over
