import { append_ } from './append';
import { curry2_ } from './_internal/curry2_';
import { empty_ } from './empty';
import { gt_ } from './gt';
import { length_ } from './length';
import { reduce_ } from './reduce';

export const dropLast_ = (count, orderedList) => {
  if (count < 0) {
    return orderedList;
  }
  const cnt = length_(orderedList) - count - 1;
  return reduce_(
    (acc, v, idx) => (gt_(idx, cnt) ? acc : append_(v, acc)),
    empty_(orderedList),
    orderedList,
  );
};
export const dropLast = curry2_(dropLast_);

export default dropLast;
