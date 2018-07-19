
import curryN_ from './curryN_'

export default function useWith_(cb, enhancers) {
  return curryN_(enhancers.length,(...args)=> cb.apply(
    cb,
    enhancers.map((enhancer, idx) => enhancer(args[idx]))
  ))
}

// export default (fn,  transformers) =>{
//   return curryN_(transformers.length, function() {
//     var args = [];
//     var idx = 0;
//     while (idx < transformers.length) {
//       args.push(transformers[idx].call(this, arguments[idx]));
//       idx += 1;
//     }
//     return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
//   })}
