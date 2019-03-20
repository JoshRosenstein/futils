import { curry2_ } from './_internal/curry2_';
import { empty_ } from './empty';
import { attach_ } from './attach';
import { reduce_ } from './reduce';
export const filter_ = (predicate, enumerable) => {
    if (enumerable.filter) {
        return enumerable.filter(predicate);
    }
    return reduce_((accumulated, value, key) => predicate(value, key) ? attach_(key, value, accumulated) : accumulated, empty_(enumerable), enumerable);
};
export const filter = curry2_(filter_);
export default filter;
//# sourceMappingURL=filter.js.map