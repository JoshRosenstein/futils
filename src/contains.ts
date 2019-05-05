import { curry2_ } from './_internal/curry2_';
import { equals_ } from './equals';
import { type_ } from './type';

export const contains_ = (x, arr) => {
  const t = type_(x);
  if (t !== 'Array' && t !== 'Object') {
    return arr.includes(x);
  }
  let index = -1;
  let flag = false;

  while (index < arr.length && !flag) {
    if (equals_(arr[index], x)) {
      flag = true;
    }
    index += 1;
  }

  return flag;
};
export const contains = curry2_(contains_);
export default contains;
