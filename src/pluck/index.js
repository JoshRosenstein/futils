import path from "../path";
import mapValues from "../mapValues";
import {curry2} from "../curry";
import toArray from "../toArray";


export default curry2((keychain, functor) =>
  mapValues(path(toArray(keychain)))(functor)
);
