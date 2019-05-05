import { curryN_ } from './curryN';
import { last_ } from './last';

export const addIndex_ = (iterFn) =>
  curryN_(iterFn.length, (fn, ...rest) => {
    let idx = 0;

    const newFn = (...args) => fn(...args, idx++, last_(rest));

    return iterFn(newFn, ...rest);
  });
export const addIndex = addIndex_;
export default addIndex_;
