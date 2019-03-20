import { curry2_ } from './_internal/curry2_';
import { type_ } from './type';
export const prepend_ = (value, orderedList) => {
    switch (type_(orderedList)) {
        case 'String': {
            return `${value}${orderedList}`;
        }
        case 'Array': {
            return [value, ...orderedList];
        }
        default: {
            throw new Error(`prepend doesn't know how to deal with ${type_(orderedList)}`);
        }
    }
};
export const prepend = curry2_(prepend_);
export default prepend;
//# sourceMappingURL=prepend.js.map