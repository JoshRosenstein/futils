import { curry3_ } from './_internal/curry3_';
import { reduce_ } from './reduce';
export const reduceRight_ = (reducer, initial, functor) =>
  reduce_(reducer, initial, functor, true);

export const reduceRight = curry3_(reduceRight_);

export default reduceRight;
