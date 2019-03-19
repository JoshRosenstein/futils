// from https://github.com/remeda/remeda/blob/master/src/mapObjKeys.ts
export function mapObjKeys(arg1, arg2) {
    if (arguments.length === 1) {
        return (data) => _mapObjKeys(data, arg1);
    }
    return _mapObjKeys(arg1, arg2);
}
function _mapObjKeys(obj, fn) {
    return Object.keys(obj).reduce((acc, key) => {
        const v = obj[key];
        acc[fn(key, v)] = v;
        return acc;
    }, {});
}
export default mapObjKeys;
