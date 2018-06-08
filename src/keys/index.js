import flip from "../flip";
import append from "../append";
import reduceKeys from "../reduceKeys";

export default keyedEnumerable => reduceKeys(flip(append))([])(keyedEnumerable);
