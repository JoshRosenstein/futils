import { curryN_ } from './curryN';
import { maxArgs_ } from './_internal/maxArgs_';
import { reduceWhile_ } from './reduceWhile';
import { toArray } from './toArray';
export const allPass_ = (fns, ...args) => reduceWhile_(acc => acc === true, (acc, fn) => fn(...args), true, toArray(fns));
export const allPass = fns => curryN_(maxArgs_(fns), (...args) => allPass_(fns, ...args));
export default allPass;
