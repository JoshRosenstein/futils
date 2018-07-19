import reduceValues from './reduceValues'
import replaceWhen from './replaceWhen'
import isNil from './isNil'
import dig from './path'


export default (paths,tree)=>reduceValues(
  (filler,p) => {
    if (isNil(filler)) {
      return dig(p)(tree)
    }

    return dig(replaceWhen(isNil,filler,p),tree)
  }
  ,
  null
  ,
  paths
)
