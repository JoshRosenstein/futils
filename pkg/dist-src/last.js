import { nth_ } from './nth';
export const last_ = list => nth_(-1, list);
export const last = last_;
export default last;
