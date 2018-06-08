import mergeRight from "../mergeRight";
import reduceValues from "../reduceValues";
import objectFrom from "../objectFrom";
import get from "../prop";
import fresh from "../empty";
import { curry2 } from "../curry";

export const pick = (keys, keyedEnumerable) => {
  return reduceValues(accumulated => key => {
    const v = get(key)(keyedEnumerable);
    return v ? mergeRight(accumulated)(objectFrom([key])(v)) : accumulated;
  })(fresh(keyedEnumerable))(keys);
};

export default curry2(pick);
