import flip from "../flip";
import append from "../append";
import reduceValues from "../reducevalues";

export default functor => reduceValues(flip(append))([])(functor);
