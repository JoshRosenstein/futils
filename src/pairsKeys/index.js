import head from "../head";
import mapValues from "../mapValues";

export default pairs => {
  return mapValues(head)(pairs);
};
