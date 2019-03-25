import { purry } from './purry';
export function cond() {
    return purry(cond_, arguments);
}
export function cond_(data, conds) {
    return conds.length
        ? conds[0][0](data)
            ? conds[0][1](data)
            : cond_(data, conds.slice(1))
        : undefined;
}
//# sourceMappingURL=cond.js.map