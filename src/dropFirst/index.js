import greaterThan from "../gt";
import append from "../append";
import reduceWithValueKey from "../reduceWithValueKey";
import fresh from "../empty";
import { curry2 } from "../curry";

export const dropFirst_ = (count, orderedList) => {
  return reduceWithValueKey(accumulated => value => index => {
    if (greaterThan(index)(count - 1)) {
      return append(value)(accumulated);
    }

    return accumulated;
  })(fresh(orderedList))(orderedList);
};

export default curry2(dropFirst_);
