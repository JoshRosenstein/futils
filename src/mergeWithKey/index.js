import reduceWithValueKey from "../reduceWithValueKey";
import attach from "../attach";

export default fn => {
  return reduceWithValueKey(accumulated => value => key => {
    if (accumulated[key]) {
      return {
        ...accumulated,
        [key]: fn(accumulated[key])(value)(key)
      };
    }

    return attach(key)(value)(accumulated);
  });
};
