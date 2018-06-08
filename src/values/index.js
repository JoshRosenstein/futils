import flip from "../flip";
import append from "../append";
import reduceValues from "../reduceValues";

export default functor => reduceValues(flip(append))([])(functor);
