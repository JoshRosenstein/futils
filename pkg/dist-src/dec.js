import { replace_ } from './replace';
import { isString } from 'typed-is';
export const dec_ = x => {
    const xx = parseFloat(x);
    return !xx ? x : isString(x) ? replace_(`${xx}`, `${xx - 1}`, x) : xx - 1;
};
export const dec = dec_;
export default dec;
//# sourceMappingURL=dec.js.map