import { curry3_ } from './_internal/curry3_';
import { type_ } from './type';
export const assoc_ = (key, value, functor) => {
    switch (type_(functor)) {
        case 'Object': {
            return Object.assign({}, functor, { [key]: value });
        }
        case 'Array': {
            return Object.assign([], functor, { [key]: value });
        }
        case 'String': {
            return Object.assign([], functor, { [key]: value }).join('');
        }
        case 'Map': {
            return new Map([...functor, [key, value]]);
        }
        case 'Set': {
            return new Set(Object.assign([], [...functor], { [key]: value }));
        }
        default: {
            throw new Error(`attach doesn't know how to set a key and value on ${type_(functor)}`);
        }
    }
};
export const assoc = curry3_(assoc_);
export default assoc;
//# sourceMappingURL=assoc.js.map