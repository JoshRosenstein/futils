import mapKeysWithValueKey from "../mapKeysWithValueKey";
import {curry2} from "../curry";

const mapKeys_=(fn,functor)=> {
    return mapKeysWithValueKey((v,key)=> fn(key))(functor)
  }


export default curry2(mapKeys_);
