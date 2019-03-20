export const comparator_ = pred => (a, b) => pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
export const comparator = comparator_;
export default comparator;
//# sourceMappingURL=comparator.js.map