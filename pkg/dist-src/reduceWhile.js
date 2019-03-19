import { curryN_ } from './curryN';
import { toPairs_ } from './toPairs';
import { isNil } from 'typed-is';
const pairWrapper = fn => (acc, [key, value], idx) => fn(acc, value, key, idx);
export const reduceWhile_ = (pred, reducer, initial, functor) => {
    if (isNil(functor)) {
        return initial;
    }
    if (Array.isArray(functor)) {
        const length = functor.length;
        let b = initial;
        for (let i = 0; i < length; ++i) {
            const a = functor[i];
            if (!pred(b, a, i))
                break;
            b = reducer(b, a, i);
        }
        return b;
    }
    else {
        return reduceWhile_(pairWrapper(pred), pairWrapper(reducer), initial, toPairs_(functor));
    }
};
export const reduceWhile = curryN_(4, reduceWhile_);
export default reduceWhile;
