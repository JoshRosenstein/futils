
import curryN_ from './curryN_'
//export default (fn, left, right) => fn(right, left)
// export default (fn) =>{
//   return function() {
//     return fn.apply(fn,[].slice.call(arguments).reverse())
//   }
// }

//Uses Ramdas to flip curried or non-curried Fns
export default fn => {
  return curryN_(fn.length, function(a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
}
