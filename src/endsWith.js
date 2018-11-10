import {curry2_} from './curry2_'

export const endsWith_ = (subset, set) => set.endsWith(subset)
export const endsWith = curry2_(endsWith_)

export default endsWith
