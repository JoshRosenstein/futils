import { curry2 } from "../curry";

export const gt_ = (a, b) => a > b;

export default curry2(gt_);
