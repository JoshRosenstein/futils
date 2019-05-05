import { append_ } from './append';
import { curry2_ } from './_internal/curry2_';
import { empty_ } from './empty';
import { gt_ } from './gt';
import { reduce_ } from './reduce';

export const drop_ = (count, orderedList) =>
  reduce_(
    (acc, value, index) => (gt_(index, count - 1) ? append_(value, acc) : acc),
    empty_(orderedList),
    orderedList,
  );
export const drop = curry2_(drop_);

export default curry2_(drop_);
