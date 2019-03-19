export const pipe_ = (...fns) => fns.reduceRight((f, g) => (...args) => f(g(...args)), arg => arg);
export const pipe = pipe_;
export default pipe;
