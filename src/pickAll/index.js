import mergeRight from "../mergeRight";
import reduceValues from "../reduceValues";
import objectFrom from "../objectFrom";
import get from "../prop";
import fresh from "../empty";
import { curry2 } from "../curry";

export const pickAll_ = (keys, keyedEnumerable) => {
  return reduceValues(accumulated => key =>
    mergeRight(accumulated)(objectFrom([key])(get(key)(keyedEnumerable)))
  )(fresh(keyedEnumerable))(keys);
};

export default curry2(pickAll_);
