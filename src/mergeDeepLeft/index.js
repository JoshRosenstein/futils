import mergeLeft from "../mergeLeft";
import mergeWith from "../mergeWith";
import isObject from "../isObject";
import isArray from "../isArray";
import { curry2 } from "../curry";

 const mergeDeepLeft= curry2((left, right) => {
  if (isArray(left) && isArray(right)) {
    return mergeLeft(left)(right);
  }

  if (isObject(left) && isObject(right)) {
    return mergeWith(mergeDeepLeft)(left)(right);
  }

  return left;
});

export default mergeDeepLeft;
