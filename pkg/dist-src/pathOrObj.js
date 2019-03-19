import { purry } from './purry';
export function pathOrObj() {
    return purry(_pathOrObj, arguments);
}
function _pathOrObj(object, path, defaultValue) {
    let current = object;
    for (const prop of path) {
        if (current == null || current[prop] == null) {
            return defaultValue;
        }
        current = current[prop];
    }
    return current;
}
const obj = {
    a: {
        b: {
            c: 1,
        },
    },
    y: 10,
};
export const ttt = pathOrObj(undefined, ['x'], 1);
export const t = pathOrObj(obj, ['x'], 2);
export const tf = pathOrObj(obj, ['a', 'b'], 3);
