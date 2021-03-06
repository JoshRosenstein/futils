import { curry2_ } from './_internal/curry2_';
import { reduceWhile_ } from './reduceWhile';

export const all_ = (fn, functor) =>
  reduceWhile_(
    (acc) => acc === true,
    (_, value, key) => fn(value, key),
    true,
    functor,
  );

export const all = curry2_(all_);

export default all;
