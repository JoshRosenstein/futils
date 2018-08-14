import path_ from './path_'
import mapValues_ from './mapValues_'

export default(p, obj) => mapValues_(x => path_(p, x), obj)
