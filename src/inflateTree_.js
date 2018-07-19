import empty_ from './empty_'
import reduce_ from './reduce_'
import mergeDeepRight_ from './mergeDeepRight_'
import objOf_ from './objOf_'
import split from './split_'

export default (delimiter,record)=>reduce_((acc,value,key)=>mergeDeepRight_(objOf_(split(delimiter,key),value),acc),empty_(record),record)
