import nth from "../nth";
import mapValues from "../mapValues";

var last = nth(-1);

export default pairs => {
  return mapValues(last)(pairs);
};
