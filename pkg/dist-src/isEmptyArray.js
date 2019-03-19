import { isArray } from 'typed-is/lib/isArray';
import { isEmpty } from 'typed-is/lib/isEmpty';
export const isEmptyArray_ = v => isArray(v) && isEmpty(v);
export const isEmptyArray = isEmptyArray_;
export default isEmptyArray;
