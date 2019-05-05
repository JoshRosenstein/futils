import { isEmpty, isNil } from 'typed-is';

export const isNilOrEmpty_ = (value) => isNil(value) || isEmpty(value);
export const isNilOrEmpty = isNilOrEmpty_;

export default isNilOrEmpty;
