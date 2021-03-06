import { type_ } from '../type';
export default (symbolName, f) => {
    if (!f || type_(f) !== 'Function') {
        throw new Error(`${symbolName} should be a function. ` +
            `Type received: ${type_(f)};  Value received: ${f}.`);
    }
    return f;
};
//# sourceMappingURL=fnOrError_.js.map