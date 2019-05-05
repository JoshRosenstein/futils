import { assoc_ } from './assoc';
import { curry3_ } from './_internal/curry3_';
import { empty_ } from './empty';
import { splitWhenNoSpace_ } from './_internal/splitWhenNoSpace_';

export const assocPath_ = (path, val, obj) => {
  const empt = empty_(obj);
  path = splitWhenNoSpace_(path, '.');
  if (path.length === 0) {
    return val;
  }
  const inner = ([head, ...tail], x, o) =>
    assoc_(head, tail.length ? inner(tail as any, x, o[head] || empt) : x, o);

  return inner(path, val, obj);
};
export const assocPath = curry3_(assocPath_);

export default assocPath;
