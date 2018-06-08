import prop from "../prop";
import reduceValues from "../reduceValues";
import flip from "../flip";
import curry from "../curry";

export default curry((keychain, tree) => {
  return reduceValues(flip(prop))(tree)(keychain);
});
