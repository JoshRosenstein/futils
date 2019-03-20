import { curry2_ } from './_internal/curry2_';
import { reduceValues_ } from './reduceValues';
import { attach_ } from './attach';
import { reverse_ } from './reverse';
import { splitWhenNoSpace_ } from './_internal/splitWhenNoSpace_';
export const objOf_ = (keys, value) => reduceValues_((acc, key) => attach_(key, acc, {}), value, reverse_(splitWhenNoSpace_(keys, '.')));
export const objOf = curry2_(objOf_);
export default curry2_(objOf_);
//# sourceMappingURL=objOf.js.map