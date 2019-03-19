import { typeOf_ } from '../typeOf_';
export const isTypeOf_ = (sig, value) => typeOf_(value) === sig.toLowerCase();
export const isTypeOf = isTypeOf_;
export default isTypeOf;
