import reduceWithValueKey from "../reduceWithValueKey";
import path from "../path";
import toArray from "../toArray";
import {curry2} from "../curry";

export const where_=(matcher, keyedEnumerable) =>
  reduceWithValueKey(latest => value => key =>
    latest && value(path(toArray(key))(keyedEnumerable))
  )(true)(matcher)


export default curry2(where_)
