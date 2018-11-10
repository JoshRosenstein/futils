import {curry2_} from './curry2_'
import {toArray_} from './toArray'
import {xprod_} from './xprod'

export const xPairs_ = (a, b) => xprod_(toArray_(a), b)
export const xPairs = curry2_(xPairs_)

export default xPairs
