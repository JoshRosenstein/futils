import toPairs from "../toPairs";
import { curry2 } from "../curry";
export const forEach_ = (fn, functor) => {
  if (typeof functor.forEach === "function") {
    functor.forEach((value, key) => {
      fn(value)(key);
    });

    return functor;
  }

  return toPairs(functor).forEach(([key, value]) => {
    fn(value)(key);
  });
};

export default curry2(forEach_);
