import { isArray, isEmpty } from 'typed-is';

export const isEmptyArray_ = (v) => isArray(v) && isEmpty(v);
export const isEmptyArray = isEmptyArray_;

export default isEmptyArray;
