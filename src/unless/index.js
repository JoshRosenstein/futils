import { curry3 } from "../curry";

const unless_ = (cond, fn, val) => (cond(val) ? val : fn(val))


export default curry3(unless_);
