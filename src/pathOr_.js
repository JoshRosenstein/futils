import path_ from './path_'
import defaultTo_ from './defaultTo_'

export default (d, p, obj)=>defaultTo_(d, path_(p, obj))
 
