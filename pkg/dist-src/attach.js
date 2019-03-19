import { curry3_ } from './_internal/curry3_';
import { type_ } from './type';
const fromMapping = {
    Object: (key, value, functor) => (Object.assign({}, functor, { [key]: value })),
    Array: (key, value, functor) => [
        ...functor.slice(0, key),
        value,
        ...functor.slice(key),
    ],
    String: (key, value, functor) => `${functor.slice(0, key)}${value}${functor.slice(key)}`,
    Map: (key, value, functor) => new Map([...functor, [key, value]]),
    Set: (key, value, functor) => new Set([...functor, value]),
};
export const attach_ = (key, value, functor) => {
    const type = type_(functor);
    // eslint-disable-line no-redeclare
    if (fromMapping.hasOwnProperty(type)) {
        return fromMapping[type](key, value, functor);
    }
    throw new Error(`attach doesn't know how to set a key and value on ${type}`);
};
export const attach = curry3_(attach_);
export default attach;
