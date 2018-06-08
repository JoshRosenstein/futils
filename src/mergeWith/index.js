import fetchKey from "../key";
import attach from "../attach";
import reduceWithValueKey from "../reduceWithValueKey";

export default fn => {
  return reduceWithValueKey(accumulated => value => key => {
    if (fetchKey(key)(accumulated)) {
      return attach(key)(fn(fetchKey(key)(accumulated))(value))(accumulated);
    }

    return attach(key)(value)(accumulated);
  });
};
