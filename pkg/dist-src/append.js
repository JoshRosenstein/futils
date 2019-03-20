import { curry2_ } from './_internal/curry2_';
import { type_ } from './type';
export function append_(value, orderedList) {
    switch (type_(orderedList)) {
        case 'Number':
        case 'String': {
            return `${orderedList}${value}`;
        }
        case 'Array': {
            return [...orderedList, value];
        }
        default: {
            throw new TypeError(`append doesn't know how to deal with ${type_(orderedList)}`);
        }
    }
}
export const append = curry2_(append_);
export default append;
//# sourceMappingURL=append.js.map