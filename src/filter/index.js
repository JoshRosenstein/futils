import empty from "../empty";
import attach from "../attach";
import reduceWithValueKey from "../reduceWithValueKey";
import { curry2 } from "../curry";

export const filter_ = (predicate, enumerable) => {
  if (enumerable.filter) {
    return enumerable.filter(predicate);
  }

  return reduceWithValueKey(accumulated => value => key => {
    if (predicate(value)) {
      return attach(key)(value)(accumulated);
    }

    return accumulated;
  })(empty(enumerable))(enumerable);
};

export default curry2(filter_);
