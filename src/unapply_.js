
export default fn=>(...args)=> fn(Array.prototype.slice.call(args, 0))
