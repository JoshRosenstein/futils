import reduce_ from './reduce_'
import merge_ from './merge_'
import empty_ from './empty_'
import type_ from './type_'
import is_ from './is_'
import of_ from './of_'

export default (functor,recursive=true)=>{


  const reducer=(subFuc,init=empty_(functor))=>  reduce_((acc,value,key)=>{
    if(is_(type_(init),value)){
      return recursive? reducer(value,acc):merge_(acc,value)
    }
    return  merge_(acc,of_(key,value,init)) 
  }
    ,
  init,subFuc)


  return reducer(functor)

}
