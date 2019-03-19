// from https://github.com/remeda/remeda/blob/master/src/_reduceLazy.ts
export function _reduceLazy(array, lazy, indexed) {
    return array.reduce((acc, item, index) => {
        const result = indexed ? lazy(item, index, array) : lazy(item);
        if (result.hasMany) {
            acc.push(...result.next);
        }
        else if (result.hasNext) {
            acc.push(result.next);
        }
        return acc;
    }, []);
}
