import { isNil } from 'typed-is/lib/isNil';

export const isDefined_ = (x) => !isNil(x);
export const isDefined = isDefined_;
export default isDefined_;
