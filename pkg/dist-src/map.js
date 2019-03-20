import { curry2_ } from './_internal/curry2_';
import { merge_ } from './merge';
import { empty_ } from './empty';
import { of_ } from './of';
import { reduce_ } from './reduce';
export const map_ = (fn, functor) => {
    if (functor.map instanceof Function) {
        return functor.map((value, key) => fn(value, key));
    }
    return reduce_((accumulated, value, key) => merge_(accumulated, of_(key, fn(value, key), accumulated)), empty_(functor), functor);
};
export const map = curry2_(map_);
export default map;
//# sourceMappingURL=map.js.map