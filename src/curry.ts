import { Curried } from './_types/$curried';
import { curryN_ } from './curryN';

export const curry_ = ((f) => curryN_(f.length, f)) as Curried;
export const curry = curry_;

export default curry;
