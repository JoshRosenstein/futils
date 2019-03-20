import { curry2_ } from './_internal/curry2_';
import { isString } from 'typed-is';
export const nth_ = (i, orderedList) => {
    const idx = i < 0 ? orderedList.length + i : i;
    if (isString(orderedList)) {
        return orderedList.charAt(idx);
    }
    return orderedList[idx];
};
export const nth = curry2_(nth_);
export default nth;
//# sourceMappingURL=nth.js.map