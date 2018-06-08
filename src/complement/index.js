import { curry2 } from "../curry";

export const complement_ = (predicate, anything) => !predicate(anything);

export default curry2(complement_);
