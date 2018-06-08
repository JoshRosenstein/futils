import mapValuesWithValueKey from "../mapValuesWithValueKey";
import {curry2} from "../curry";

const mapValues_=(fn, functor) => {
  if (functor.map instanceof Function) {
    return functor.map(value => fn(value));
  }

  return mapValuesWithValueKey(value  => fn(value))(functor);
}


export default curry2(mapValues_);
