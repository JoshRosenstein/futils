import { append_ } from './append';
import { reduceValues_ } from './reduceValues';
export const values_ = functor => reduceValues_((l, r) => append_(r, l), [], functor);
export const values = values_;
export default values;
