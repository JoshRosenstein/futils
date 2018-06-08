import reduceValues from "../reduceValues";
import mergeRight from "../mergeRight";
import nth from "../nth";
import fresh from "../empty";
var last = nth(-1);
export default (functors) =>{
  if (last(functors)) {
    return reduceValues(mergeRight)(fresh(last(functors)))(functors);
  }

  return functors;
}
