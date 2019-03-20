// from https://github.com/remeda/remeda/blob/master/src/mapObj.ts
export function mapObj(arg1, arg2) {
    if (arguments.length === 1) {
        return (data) => _mapObj(data, arg1);
    }
    return _mapObj(arg1, arg2);
}
function _mapObj(obj, fn) {
    return Object.keys(obj).reduce((acc, key) => (Object.assign({}, acc, fn(obj[key], key))), {});
}
export default mapObj;
//# sourceMappingURL=mapObj.js.map