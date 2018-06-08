import { curry2 } from "../curry";

export const when_ = (condition, whenTrueFn) => {
  if (whenTrueFn === undefined) {
    return whenTrueFnHolder => when_(condition, whenTrueFnHolder);
  }

  return input => {
    const flag = typeof condition === "boolean" ? condition : condition(input);

    if (flag) {
      return whenTrueFn(input);
    }

    return input;
  };
};

export default curry2(when_);
