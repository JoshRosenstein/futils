// from https://github.com/remeda/remeda/blob/master/src/range.ts
import { purry } from './purry';
export function range() {
    return purry(range_, arguments);
}
export function range_(start, end) {
    const ret = [];
    for (let i = start; i < end; i++) {
        ret.push(i);
    }
    return ret;
}
export default range;
