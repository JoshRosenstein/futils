export default pred => (a, b) => (pred(a, b) ? -1 : pred(b, a) ? 1 : 0)
