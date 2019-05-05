import { curryN_ } from '../curryN';
export const curry4 = (fn) => curryN_(4, fn);
export default curry4;
