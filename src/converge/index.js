import curry from "../curry";
import mapValues from "../mapValues";
import pluck from "../pluck";
import pipe from "../pipe";
const max = curry((a, b) => (b > a ? b : a));

function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function() {
        return fn.apply(this, arguments);
      };
    case 1:
      return function(a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function(a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function(a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function(a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function(a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function(a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function(a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function(a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error(
        "First argument to _arity must be a non-negative integer no greater than ten"
      );
  }
}

function _curryN(length, received, fn) {
  return function() {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      result = arguments[argsIdx];
      argsIdx += 1;
      combined[combinedIdx] = result;
      left -= 1;
      combinedIdx += 1;
    }
    return left <= 0
      ? fn.apply(this, combined)
      : _arity(left, _curryN(length, combined, fn));
  };
}

var curryN = curry(function curryN(length, fn) {
  if (length === 1) {
    return curry(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});

export default curry((after, fns) => {
  const l = pluck("length", fns);
  const n = l.reduce((acc, v) => max(acc, v), 0);

  return curryN(n, function() {
    var args = arguments;
    var context = this;
    return after.apply(context, mapValues(fn => fn.apply(context, args), fns));
  });
});

// export default curry((after, fns) => {
//   (value, ...argsToGive) => pipe(...fns)(value);
// });
