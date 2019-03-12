import {first_} from './first'
import {mapValues_} from './mapValues'

export const pairsKeys_ = pairs => mapValues_(first_, pairs)
export const pairsKeys = pairsKeys_
export default pairsKeys
