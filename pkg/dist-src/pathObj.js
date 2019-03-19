import { purry } from './purry';
export function pathObj() {
    return purry(_pathObj, arguments);
}
function _pathObj(object, path) {
    let current = object;
    for (const prop of path) {
        if (current == null || current[prop] == null) {
            return undefined;
        }
        current = current[prop];
    }
    return current;
}
const obj = {
    a: {
        b: {
            c: [1],
        },
    },
    y: 10,
};
const e = pathObj(obj, ['x']);
export const ttt = pathObj(undefined, ['a', 'b', 'c']);
export const t = pathObj(obj, ['d']);
//export const t2 = pathObj(['a', 'b'])(obj)
