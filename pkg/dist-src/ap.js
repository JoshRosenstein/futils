import { curry2_ } from './_internal/curry2_';
import { concat_ } from './concat';
import { reduce_ } from './reduce';
import { mapValues_ } from './mapValues';
import { isFunction } from './isFunction';
export const ap_ = (applyF, applyX) => isFunction(applyF)
    ? x => applyF(x)(applyX(x))
    : reduce_((acc, f) => concat_(acc, mapValues_(f, applyX)), [], applyF);
export const ap = curry2_(ap_);
export default ap;
