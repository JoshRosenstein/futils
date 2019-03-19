export function flow(value, ...operations) {
    let ret = value;
    const lazyOps = operations.map(op => {
        const { lazy, lazyArgs } = op;
        if (lazy) {
            const fn = lazy(...lazyArgs);
            fn.indexed = lazy.indexed;
            fn.single = lazy.single;
            fn.index = 0;
            fn.items = [];
            return fn;
        }
        return null;
    });
    let opIdx = 0;
    while (opIdx < operations.length) {
        const op = operations[opIdx];
        const lazyOp = lazyOps[opIdx];
        if (!lazyOp) {
            ret = op(ret);
            opIdx++;
            continue;
        }
        const lazySeq = [];
        for (let j = opIdx; j < operations.length; j++) {
            if (lazyOps[j]) {
                lazySeq.push(lazyOps[j]);
                if (lazyOps[j].single) {
                    break;
                }
            }
            else {
                break;
            }
        }
        let acc = [];
        for (let item of ret) {
            if (_processItem({ item, acc, lazySeq })) {
                break;
            }
        }
        const lastLazySeq = lazySeq[lazySeq.length - 1];
        ret = lastLazySeq.single ? acc[0] : acc;
        opIdx += lazySeq.length;
    }
    return ret;
}
function _processItem({ item, lazySeq, acc, }) {
    if (lazySeq.length === 0) {
        acc.push(item);
        return false;
    }
    let lazyResult = { done: false, hasNext: false };
    let isDone = false;
    for (let i = 0; i < lazySeq.length; i++) {
        const lazyFn = lazySeq[i];
        const indexed = lazyFn.indexed;
        const index = lazyFn.index;
        const items = lazyFn.items;
        items.push(item);
        lazyResult = indexed ? lazyFn(item, index, items) : lazyFn(item);
        lazyFn.index++;
        if (lazyResult.hasNext) {
            if (lazyResult.hasMany) {
                const nextValues = lazyResult.next;
                for (const subItem of nextValues) {
                    const subResult = _processItem({
                        item: subItem,
                        acc,
                        lazySeq: lazySeq.slice(i + 1),
                    });
                    if (subResult) {
                        return true;
                    }
                }
                return false;
            }
            else {
                item = lazyResult.next;
            }
        }
        if (!lazyResult.hasNext) {
            break;
        }
        // process remaining functions in the pipe
        // but don't process remaining elements in the input array
        if (lazyResult.done) {
            isDone = true;
        }
    }
    if (lazyResult.hasNext) {
        acc.push(item);
    }
    if (isDone) {
        return true;
    }
    return false;
}
export default flow;
