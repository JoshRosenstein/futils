import { curry2_ } from './_internal/curry2_';
import { map_ } from './map';
import { applyTo_ } from './applyTo';

export const sequence_ = (fns, value) => map_((fn) => applyTo_(value, fn), fns);
export const sequence = curry2_(sequence_);
export default sequence;
