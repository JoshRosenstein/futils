import { curry2_ } from './_internal/curry2_';
import { reduceWhile_ } from './reduceWhile';
export const any_ = (handlerFn, functor) => reduceWhile_(acc => acc === false, (acc, value, key) => handlerFn(value, key), false, functor);
export const any = curry2_(any_);
export default any;
