import empty from "../empty";
import {equals_} from '../equals'
export default x => x != null && equals_(x , empty(x))
