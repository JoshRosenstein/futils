import setArity from './_internal/setArity';
function withArity(operation, arity, args) {
    const name = operation.name || '';
    const curried = setArity(arity, internalCurry.bind(null, operation, arity, args));
    Object.defineProperty(curried, 'name', { value: name, configurable: true });
    return curried;
}
const internalCurry = (operation, arity, prevArgs, ...nextArgs) => {
    const left = arity - nextArgs.length;
    const args = prevArgs.concat(nextArgs);
    if (left <= 0) {
        return operation(...args);
    }
    return withArity(operation, left, args);
};
export function curryN_(arity, operation) {
    return withArity(operation, arity, []);
}
export const curryN = curryN_;
export default curryN_;
