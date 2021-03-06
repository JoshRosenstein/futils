import { curry2_ } from './_internal/curry2_';
import { prop_ } from './prop';
import { reduceValues_ } from './reduceValues';
import { splitWhenNoSpace_ } from './_internal/splitWhenNoSpace_';
import { isString } from 'typed-is';
export const path_ = (keys, tree) => {
    if (tree) {
        if (isString(keys) && tree[keys])
            return tree[keys];
        return reduceValues_((acc, val) => prop_(val, acc), tree, splitWhenNoSpace_(keys, '.'));
    }
};
export const path = curry2_(path_);
export default path;
//# sourceMappingURL=path.js.map