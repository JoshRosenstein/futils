import { isNil, isArray } from 'typed-is';

export const toArray_ = <T>(v: T[] | T | undefined | null): T[] =>
  isNil(v) ? [] : isArray(v) ? v : [v];

export const toArray = toArray_;

export default toArray;
