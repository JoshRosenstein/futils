import reduceValues from "../reduceValues";
import mergeDeepLeft from "../mergeDeepLeft";
import head from "../head";
import fresh from "../empty";

export default functors=> {
  if (head(functors)) {
    return reduceValues(mergeDeepLeft)(fresh(head(functors)))(functors);
  }

  return functors;
}
