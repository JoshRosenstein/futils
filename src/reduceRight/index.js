import { curry3 } from "../curry";
import {reduce_} from '../reduce'
export default curry3((reducer, initial, functor) =>
  reduce_(reducer, initial, functor, true)
)
