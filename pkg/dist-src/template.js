import { curry2_ } from './_internal/curry2_';
import { path_ } from './path';
import { eval_ } from './_internal/eval_';
import { isString } from 'typed-is';
export const template_ = (string, data) => isString(string)
    ? eval_(string.replace(/{\!([^}]+)}/g, (_, key) => {
        const res = path_(key, data);
        return res;
    }))
    : string;
export const template = curry2_(template_);
export default template;
//# sourceMappingURL=template.js.map