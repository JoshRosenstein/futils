import { curry3 } from "../curry";
import {reduceWithValueKey_} from '../reduceWithValueKey'
export default curry3((reducer, initial, functor) =>
  reduceWithValueKey_(reducer, initial, functor, true)
)
