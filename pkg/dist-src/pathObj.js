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
//# sourceMappingURL=pathObj.js.map