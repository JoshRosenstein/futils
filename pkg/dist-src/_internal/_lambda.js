import { isString } from 'typed-is';
export default function (exp) {
    if (!isString(exp)) {
        return;
    }
    let parts = exp.match(/(.*)\s*[=-]>\s*(.*)/);
    if (parts) {
        parts.shift();
    }
    //@ts-ignore
    const params = parts
        .shift()
        .replace(/^\s*|\s(?=\s)|\s*$|,/g, '')
        .split(' ');
    //@ts-ignore
    const body = parts.shift();
    //@ts-ignore
    parts = (!/\s*return\s+/.test(body) ? 'return ' : '') + body;
    //@ts-ignore
    params.push(parts);
    return Function.apply({}, params);
}
//# sourceMappingURL=_lambda.js.map