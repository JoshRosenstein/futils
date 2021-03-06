import { curry2_ } from './_internal/curry2_';
import { empty_ } from './empty';
import { mergeDeepRight_ } from './mergeDeepRight';
import { objOf_ } from './objOf';
import { reduce_ } from './reduce';
import { split_ } from './split';

export const inflateTree_ = (delimiter, record) =>
  reduce_(
    (acc, value, key) =>
      mergeDeepRight_(objOf_(split_(delimiter, key), value), acc),
    empty_(record),
    record,
  );
export const inflateTree = curry2_(inflateTree_);
export default inflateTree;
