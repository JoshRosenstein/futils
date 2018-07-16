import mergeDeepRight_ from "./mergeDeepRight_"
import reduceValues_ from "./reduceValues_"
import empty_ from "./empty_"
import of_ from "./of_"
import objOf_ from "./objOf_"

export default (unction, list) =>
  reduceValues_(
    (accumulated, value) =>{
      const key=unction(value)
      return key? mergeDeepRight_(accumulated,objOf_(key,of_(null, value, empty_(list)))):accumulated

    }
    ,{},list)
