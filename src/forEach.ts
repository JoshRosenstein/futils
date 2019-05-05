import { curry2_ } from './_internal/curry2_';
import { toPairs_ } from './toPairs';

export const forEach_ = (fn, functor) => {
  if (typeof functor.forEach === 'function') {
    functor.forEach((value, key) => {
      fn(value, key);
    });

    return functor;
  }
  return (toPairs_(functor) as any[]).forEach(([key, value]) => {
    fn(value, key);
  });
};
export const forEach = curry2_(forEach_);

export default forEach;
