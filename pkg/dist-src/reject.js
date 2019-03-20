import { curry2_ } from './_internal/curry2_';
import { filter_ } from './filter';
import { complement_ } from './complement';
export const reject_ = (predicate, enumerable) => {
    if (enumerable.reject) {
        return enumerable.reject(predicate);
    }
    return filter_(complement_(predicate), enumerable);
};
export const reject = curry2_(reject_);
export default reject;
//# sourceMappingURL=reject.js.map