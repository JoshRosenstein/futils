import { curry2_ } from './_internal/curry2_';
import { equals_ } from './equals';
import { mapValues_ } from './mapValues';
import { where_ } from './where';

export const whereEq_ = (spec, testObj) =>
  where_(mapValues_((a) => (b) => equals_(a, b), spec), testObj);

export const whereEq = curry2_(whereEq_);

export default whereEq;
