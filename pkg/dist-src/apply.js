import { curry2_ } from './_internal/curry2_';
export const apply_ = (fn, arg) => fn(...arg);
export const apply = curry2_(apply_);
export default apply;
//# sourceMappingURL=apply.js.map