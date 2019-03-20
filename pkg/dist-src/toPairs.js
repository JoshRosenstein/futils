import { isFunction } from 'typed-is/lib/isFunction';
import { isNil } from 'typed-is/lib/isNil';
import { isString } from 'typed-is/lib/isString';
export const toPairs_ = value => {
    if (isNil(value)) {
        return []; //as ToPairs_<T>;
        // throw new Error(`toPairs doesn't know how to handle ${type_(value)}`)
    }
    if (isString(value)) {
        return toPairs_([...value]); //as ToPairs_<T>;
    }
    if (isFunction(value['entries'])) {
        return [...value.entries()]; //as ToPairs_<T>;
    }
    return Object.entries(value); //as ToPairs_<T>;
};
export const toPairs = toPairs_;
export default toPairs;
//# sourceMappingURL=toPairs.js.map