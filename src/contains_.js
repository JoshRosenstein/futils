import equals_ from './equals_'
import type_ from './type_'

export default (x, arr) =>{
  const t= type_(x)
  if(t!=='Array' && t!=='Object'){
    return arr.includes(x)
  }
  let index = -1
  let flag = false

  while (index < arr.length && !flag) {
    if (equals_(arr[index], x)) {
      flag = true
    }
    index+=1
  }

  return flag
}
