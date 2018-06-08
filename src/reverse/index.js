import reduceValues from "../reduceValues";
import flip from "../flip";
import fresh from "../empty";
import prepend from "../prepend";

export default orderedList =>
  reduceValues(flip(prepend))(fresh(orderedList))(orderedList);
