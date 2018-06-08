import reduceValues from "../reduceValues";
import mergeDeepRight from "../mergeDeepRight";
import nth from "../nth";
import fresh from "../empty";
var last = nth(-1);
export default (functors) =>{
  if (last(functors)) {
    return reduceValues(mergeDeepRight)(fresh(last(functors)))(functors);
  }

  return functors;
}
