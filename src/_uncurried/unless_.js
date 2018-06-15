export default (cond, fn, val) => (cond(val) ? val : fn(val))
