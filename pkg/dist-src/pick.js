import { curry2_ } from './_internal/curry2_';
import { reduceValues_ } from './reduceValues';
import { attach_ } from './attach';
import { prop_ } from './prop';
import { empty_ } from './empty';
import { isNil_ } from './isNil';
import { splitWhenNoSpace_ } from './_internal/splitWhenNoSpace_';
export const pick_ = (keys, obj) => reduceValues_((acc, key) => {
    const v = prop_(key, obj);
    return isNil_(v) ? acc : attach_(key, v, acc);
}, empty_(obj), splitWhenNoSpace_(keys, ','));
export const pick = curry2_(pick_);
export default pick;
//# sourceMappingURL=pick.js.map