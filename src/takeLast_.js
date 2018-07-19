import lt_ from './lt_'
import append_ from './append_'
import reduce_ from './reduce_'
import empty_ from './empty_'
import length_ from './length_'

export default (count,orderedList) => {
  if(count<0) return orderedList
  const cnt = length_(orderedList)- count
  return   reduce_((acc,v,idx) =>(lt_(idx,cnt))?acc:append_(v,acc),empty_(orderedList),orderedList)
}
