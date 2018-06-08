import { curry2 } from "../curry";
export const applyTo_ = (value, fn) => fn(value);

export default curry2(applyTo_);
