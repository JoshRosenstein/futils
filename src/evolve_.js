
import reduce_ from './reduce_'
import empty_ from './empty_'
import keys_ from './keys_'
import prop_ from './prop_'
import isObject_ from './isObject_'

const evolve_= (cbs,obj)=>reduce_((res,key)=>{
  const currentCb=prop_(key,cbs)
  const currentVal=prop_(key,obj)

  res[key] = currentCb
    ?isObject_(currentCb)
      ?evolve_(currentCb, currentVal)
      :currentCb(currentVal)
    :currentVal

  return res
}
  ,
empty_(obj),
keys_(obj)

)

export default evolve_
