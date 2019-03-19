import { drop_ } from './drop';
export const tail_ = x => drop_(1, x);
export const tail = tail_;
export default tail_;
