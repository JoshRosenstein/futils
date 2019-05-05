import { curry2_ } from './_internal/curry2_';
import { reduce_ } from './reduce';
import { attach_ } from './attach';
import { empty_ } from './empty';

export const omitKey_ = (key, keyedList) =>
  reduce_(
    (accumulated, value, k) =>
      key === k ? accumulated : attach_(k, value, accumulated),
    empty_(keyedList),
    keyedList,
  );
export const omitKey = curry2_(omitKey_);

export default omitKey;
