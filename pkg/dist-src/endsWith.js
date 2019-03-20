import { curry2_ } from './_internal/curry2_';
export const endsWith_ = (subset, set) => set.endsWith(subset);
export const endsWith = curry2_(endsWith_);
export default endsWith;
//# sourceMappingURL=endsWith.js.map