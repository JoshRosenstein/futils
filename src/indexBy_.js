import mergeRight from './merge_'
import reduceValues from './reduceValues'
import empty from './empty'
import first from './first'
import of from './of'

export default (fn,list)=>reduceValues((accumulated,value)=>
  mergeRight(accumulated,of(fn(value),value,accumulated))
  ,
empty(first(Array.from(list)))
  ,
list
)
