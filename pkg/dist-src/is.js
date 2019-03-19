import { curry2_ } from './_internal/curry2_';
import { type_ } from './type';
import { isNil } from 'typed-is';
export const is_ = (sig, value) => {
    if (typeof sig === 'string') {
        return type_(value) === sig;
    }
    return (!isNil(value) && value.constructor === sig) || value instanceof sig;
};
export const is = curry2_(is_);
export default is;
