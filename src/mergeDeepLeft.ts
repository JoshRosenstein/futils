import { curry2_ } from './_internal/curry2_';
import { mergeDeepRight_ } from './mergeDeepRight';

export const mergeDeepLeft_ = (left, right) => mergeDeepRight_(right, left);
export const mergeDeepLeft = curry2_(mergeDeepLeft_);

export default mergeDeepLeft;
