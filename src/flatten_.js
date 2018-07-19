import reduce_ from './reduce_'
import merge_ from './merge_'
import empty_ from './empty_'
import attach_ from './attach_'
import type_ from './type_'
import is_ from './is_'


export default functor=>
  reduce_((acc,value,key)=>
    is_(type_(functor),value)?
      merge_(acc,value):
      attach_(key,value,acc),
  empty_(functor),functor)
