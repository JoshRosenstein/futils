import { values_ } from './values';
import { isNil } from 'typed-is/lib/isNil';
import { isInteger } from 'typed-is/lib/isInteger';
export const length_ = obj => isNil(obj)
    ? undefined
    : typeof obj.length == 'number' && isInteger(obj.length) && obj.length >= 0
        ? obj.length
        : obj.size || values_(obj).length;
export const length = length_;
export default length_;
