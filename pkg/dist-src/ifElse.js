import { curryN_ } from './curryN';
export const ifElse_ = (predicate, consequent, alternative, value) => predicate(value) ? consequent(value) : alternative(value);
export const ifElse = curryN_(4, ifElse_);
export default ifElse;
//# sourceMappingURL=ifElse.js.map