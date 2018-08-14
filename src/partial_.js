// partial_ :: ((a... -> b), [a]) -> a... -> b
export default (f, args) => f.bind(null, ...args)
