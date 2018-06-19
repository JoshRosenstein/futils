import gt_ from "./gt_"
import append_ from "./append_"
import reduce_ from "./reduce_"
import empty_ from "./empty_"
import length_ from "./length_"

export default (count,orderedList) => {
  if(count<0) return orderedList
  const cnt = length_(orderedList)- count-1
return   reduce_((acc,v,idx) =>(gt_(idx,cnt))?acc:append_(v,acc),empty_(orderedList),orderedList)
}
