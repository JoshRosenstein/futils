import reduceValues from "../reduceValues";
import mergeLeft from "../mergeLeft";
import head from "../head";
import fresh from "../empty";

export default function mergeAllLeft(functors) {
  if (head(functors)) {
    return reduceValues(mergeLeft)(fresh(head(functors)))(functors);
  }

  return functors;
}
