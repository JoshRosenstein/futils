import { purry } from './purry';
export function pickObj() {
    return purry(pickObj_, arguments);
}
export function pickObj_(object, names) {
    if (object == null) {
        return {};
    }
    return names.reduce((acc, name) => {
        acc[name] = object[name];
        return acc;
    }, {});
}
export default pickObj;
//# sourceMappingURL=pickObj.js.map