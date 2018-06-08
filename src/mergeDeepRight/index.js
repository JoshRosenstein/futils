import mergeRight from "../mergeRight";
import mergeWith from "../mergeWith";
import isObject from "../isObject";
import isArray from "../isArray";
import { curry2 } from "../curry";

export const mergeDeepRight = curry2((left, right) => {
  if (isArray(left) && isArray(right)) {
    return mergeRight(left)(right);
  }

  if (isObject(left) && isObject(right)) {
    return mergeWith(mergeDeepRight)(left)(right);
  }

  return right;
});

export default mergeDeepRight;
