import { curry2_ } from './_internal/curry2_';
export const xprod_ = (a, b) => {
    const res = [];
    let ia = 0;
    let ib;
    const alen = a.length;
    const blen = b.length;
    while (ia < alen) {
        ib = 0;
        while (ib < blen) {
            res.push([a[ia], b[ib]]);
            ib += 1;
        }
        ia += 1;
    }
    return res;
};
export const xprod = curry2_(xprod_);
export default xprod;
