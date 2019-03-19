export const compose_ = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)), arg => arg);
export const compose = compose_;
export default compose;
