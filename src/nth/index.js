import { curry2 } from "../curry";
import is from "../is";

const nth_ = (offset, list) => {
  var idx = offset < 0 ? list.length + offset : offset;
  return is("String")(list) ? list.charAt(idx) : list[idx];
};

export default curry2(nth_);
