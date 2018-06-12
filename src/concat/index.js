import {curry2} from "../curry";
import {is_} from "../is";
export const concat_ = (a, b) =>
  (is_("Array", a) && is_("Array", b)) || (is_("String", a) && is_("String", b))
    ? a.concat(b)
    : null
//export default curry2(concat_);
export default curry2(concat_)
