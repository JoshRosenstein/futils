import { curry2_ } from './_internal/curry2_';
export const tap_ = (fn, value) => {
    fn(value);
    return value;
};
export const tap = curry2_(tap_);
export default tap;
//# sourceMappingURL=tap.js.map