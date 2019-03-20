import { purry } from './purry';
export function omitProps() {
    return purry(_omitProps, arguments);
}
function _omitProps(object, names) {
    const set = new Set(names);
    return Object.entries(object).reduce((acc, [name, value]) => {
        if (!set.has(name)) {
            acc[name] = value;
        }
        return acc;
    }, {});
}
export default omitProps;
//# sourceMappingURL=omitProps.js.map