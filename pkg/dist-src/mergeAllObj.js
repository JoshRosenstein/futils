// https://github.com/remeda/remeda/blob/master/src/mergeAll.ts
export function mergeAllObj(items) {
    return items.reduce((acc, x) => (Object.assign({}, acc, x)), {});
}
