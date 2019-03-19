import { purry } from './purry';
export function omitProp() {
    return purry(_omitProp, arguments);
}
function _omitProp(object, key) {
    return Object.entries(object).reduce((acc, [name, value]) => {
        if (name !== key) {
            acc[name] = value;
        }
        return acc;
    }, {});
}
export default omitProp;
