export const unapply_ = f => (...args) => f(args);
// unapply :: ([a] -> b) -> a... -> b
export const unapply = unapply_;
export default unapply;
//# sourceMappingURL=unapply.js.map