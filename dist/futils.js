(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.F = {})));
}(this, (function (exports) { 'use strict';

  var always_ = (function (x) {
    return function () {
      return x;
    };
  });

  var curry2_ = (function (f) {
    return function curried(a, b) {
      return arguments.length >= 2 ? f(a, b) : function (b2) {
        return f(a, b2);
      };
    };
  });

  var type_ = (function (value) {
    if (value === null) {
      return "null";
    }

    if (value === undefined) {
      return "undefined";
    }

    return value.constructor.name;
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  var fromIteratorToArrayIterator = function fromIteratorToArrayIterator(list) {
    return function (iterator) {
      var _iterator$next = iterator.next(),
          value = _iterator$next.value,
          done = _iterator$next.done;

      if (done) {
        return list;
      }

      return fromIteratorToArrayIterator([].concat(toConsumableArray(list), [value]))(iterator);
    };
  };

  var fromIteratorToArray_ = (function (iterator) {
    return fromIteratorToArrayIterator([])(iterator);
  });

  var toPairs_ = (function (pairableObj) {
    switch (type_(pairableObj)) {
      case "Array":
        {
          return pairableObj.reduce(function (pairs, value, index) {
            return [].concat(toConsumableArray(pairs), [[index, value]]);
          }, []);
        }
      case "Object":
        {
          return Object.entries(pairableObj);
        }
      case "Set":
        {
          return fromIteratorToArray_(pairableObj.values()).map(function (value) {
            return [undefined, value];
          });
        }
      case "Map":
        {
          return fromIteratorToArray_(pairableObj.entries());
        }

      default:
        {
          throw new Error("toPairs doesn't know how to handle " + type_(pairableObj));
        }
    }
  });

  var reduceWhile_ = (function (pred, reducer, initial, functor) {
    var fn = void 0;
    var predfn = void 0;
    switch (type_(functor)) {
      case "Array":
        fn = function fn(acc, value, key) {
          return reducer(acc, value, key);
        };
        predfn = function predfn(acc, value, key) {
          return pred(acc, value, key);
        };
        break;
      case "Object":
      case "Map":
        fn = function fn(acc, _ref) {
          var _ref2 = slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          return reducer(acc, value, key);
        };
        functor = toPairs_(functor);
        predfn = function predfn(acc, _ref3) {
          var _ref4 = slicedToArray(_ref3, 2),
              key = _ref4[0],
              value = _ref4[1];

          return pred(acc, value, key);
        };
        break;
      case "Set":
        fn = function fn(acc, _ref5) {
          var _ref6 = slicedToArray(_ref5, 2),
              value = _ref6[1];

          return reducer(acc, value);
        };
        functor = toPairs_(functor);
        predfn = function predfn(acc, _ref7) {
          var _ref8 = slicedToArray(_ref7, 2),
              value = _ref8[1];

          return pred(acc, value);
        };
        break;
      case "String":
        fn = function fn(acc, _ref9) {
          var _ref10 = slicedToArray(_ref9, 2),
              key = _ref10[0],
              value = _ref10[1];

          return reducer(acc, value, key);
        };
        functor = toPairs_(functor.split(""));
        predfn = function predfn(acc, _ref11) {
          var _ref12 = slicedToArray(_ref11, 2),
              key = _ref12[0],
              value = _ref12[1];

          return pred(acc, value, key);
        };
        break;

      default:
        {
          throw new Error("reduce couldn't figure out how to reduce " + type_(functor));
        }
    }

    var length = functor.length;
    var b = initial;

    for (var i = 0; i < length; ++i) {
      var a = functor[i];
      if (!predfn(b, a, i)) break;

      b = fn(b, a, i);
    }

    return b;
  });

  var any_ = (function (handlerFn, list) {
    return reduceWhile_(function (acc) {
      return acc === false;
    }, function (acc, value, key) {
      return handlerFn(value, key);
    }, false, list);
  });

  var any = /*#__PURE__*/curry2_(any_);

  var anyPass_ = (function (fns, value) {
    var i = 0;
    var length = fns.length;
    while (i < length && !fns[i](value)) {
      i += 1;
    }
    return i < length;
  });

  var anyPass = /*#__PURE__*/curry2_(anyPass_);

  var append_ = (function (value, orderedList) {
    switch (type_(orderedList)) {
      case "String":
        {
          return "" + orderedList + value;
        }
      case "Array":
        {
          return [].concat(toConsumableArray(orderedList), [value]);
        }

      default:
        {
          throw new TypeError("append doesn't know how to deal with " + type_(orderedList));
        }
    }
  });

  var append = /*#__PURE__*/curry2_(append_);

  var applyTo_ = (function (value, fn) {
    return fn(value);
  });

  var applyTo = /*#__PURE__*/curry2_(applyTo_);

  var attach_ = (function (key, value, functor) {
    switch (type_(functor)) {
      case "Object":
        {
          return _extends({}, functor, defineProperty({}, key, value));
        }
      case "Array":
        {
          return [].concat(toConsumableArray(functor.slice(0, key)), [value], toConsumableArray(functor.slice(key)));
        }
      case "String":
        {
          return "" + functor.slice(0, key) + value + functor.slice(key);
        }
      case "Map":
        {
          return new Map([].concat(toConsumableArray(functor), [[key, value]]));
        }
      case "Set":
        {
          return new Set([].concat(toConsumableArray(functor), [value]));
        }
      default:
        {
          throw new Error("attach doesn't know how to set a key and value on " + type_(functor));
        }
    }
  });

  var curry3_ = (function (f) {
    return function curried(a, b, c) {
      if (arguments.length >= 3) return f(a, b, c);
      if (arguments.length === 2) return function (c2) {
        return f(a, b, c2);
      };
      return function (b2, c2) {
        if (arguments.length === 2) return f(a, b2, c2);
        return function (c3) {
          return f(a, b2, c3);
        };
      };
    };
  });

  var attach = /*#__PURE__*/curry3_(attach_);

  var both_ = (function (fn1, fn2) {
    return function () {
      return fn1.apply(fn1, arguments) && fn2.apply(fn2, arguments);
    };
  });

  var is_ = (function (sig, value) {
    return sig === "null" ? value === null : sig === "undefined" ? value === undefined : value === undefined || value === null ? false : type_(value) === sig;
  });

  var _isArguments = /*#__PURE__*/function () {
    return Object.prototype.toString.call(arguments) === "[object Arguments]" ? function _isArguments(x) {
      return Object.prototype.toString.call(x) === "[object Arguments]";
    } : function _isArguments(x) {
      return Object.prototype.hasOwnProperty.call(x, "callee");
    };
  }();

  var empty_ = (function (x) {
    return x != null && typeof x.empty === "function" ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === "function" ? x.constructor.empty() : is_("Array", x) ? [] : is_("String", x) ? "" : is_("Object", x) ? {} : is_("Map", x) ? new Map() : is_("Set", x) ? new Set() : _isArguments(x) ? function () {
      return arguments;
    }() : // else
    void 0;
  });

  var reduce_ = (function (reducer, initial, functor) {
    var right = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var fn = void 0;
    switch (type_(functor)) {
      case "Array":
        fn = function fn(acc, value, key) {
          return reducer(acc, value, key);
        };
        break;
      case "Object":
      case "Map":
        fn = function fn(acc, _ref) {
          var _ref2 = slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          return reducer(acc, value, key);
        };
        functor = toPairs_(functor);
        break;
      case "Set":
        fn = function fn(acc, _ref3) {
          var _ref4 = slicedToArray(_ref3, 2),
              value = _ref4[1];

          return reducer(acc, value);
        };
        functor = toPairs_(functor);
        break;
      case "String":
        fn = function fn(acc, _ref5) {
          var _ref6 = slicedToArray(_ref5, 2),
              key = _ref6[0],
              value = _ref6[1];

          return reducer(acc, value, key);
        };
        functor = toPairs_(functor.split(""));
        break;

      default:
        {
          throw new Error("reduce couldn't figure out how to reduce " + type_(functor));
        }
    }
    if (!right) {
      return functor.reduce(fn, initial);
    }

    var idx = functor.length - 1;
    while (idx >= 0) {
      initial = fn(functor[idx], initial);
      idx -= 1;
    }
    return initial;
  });

  var filter_ = (function (predicate, enumerable) {
    if (enumerable.filter) {
      return enumerable.filter(predicate);
    }

    return reduce_(function (accumulated, value, key) {
      return predicate(value) ? attach_(key, value, accumulated) : accumulated;
    }, empty_(enumerable), enumerable);
  });

  var reject_ = (function (predicate, enumerable) {
    if (enumerable.reject) {
      return enumerable.reject(predicate);
    }
    return filter_(function (v) {
      return !predicate(v);
    }, enumerable);
  });

  var isNil_ = (function (value) {
    return is_("undefined", value) || is_("null", value);
  });

  var compact_ = (function (collection) {
    return reject_(isNil_, collection);
  });

  var complement_ = (function (predicate, anything) {
    return !predicate(anything);
  });

  var complement = /*#__PURE__*/curry2_(complement_);

  var compose_ = (function () {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return fns.reduce(function (f, g) {
      return function () {
        return f(g.apply(undefined, arguments));
      };
    });
  });

  var concat_ = (function (a, b) {
    return is_("Array", a) && is_("Array", b) || is_("String", a) && is_("String", b) ? a.concat(b) : null;
  });

  var concat = /*#__PURE__*/curry2_(concat_);

  // Extracted out of jest
  function hasKey_(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  function keys_(obj, isArray) {
    var allKeys = function (o) {
      var keys = [];
      for (var key in o) {
        if (hasKey_(o, key)) {
          keys.push(key);
        }
      }
      return keys.concat(Object.getOwnPropertySymbols(o).filter(function (symbol) {
        return Object.getOwnPropertyDescriptor(o, symbol).enumerable;
      }));
    }(obj);

    if (!isArray) {
      return allKeys;
    }

    var extraKeys = [];
    if (allKeys.length === 0) {
      return allKeys;
    }

    for (var x = 0; x < allKeys.length; x++) {
      if (!allKeys[x].match(/^[0-9]+$/)) {
        extraKeys.push(allKeys[x]);
      }
    }

    return extraKeys;
  }

  var _equals_ = function _equals_(a, b) {
    var aStack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var bStack = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    var result = true;
    if (a === b) return true;
    if (a == null || b == null) return a === b;

    var typeA = type_(a);
    var typeB = type_(b);
    if (typeA !== typeB) return false;

    switch (typeA) {
      case "String":
      case "Number":
        {
          return a.valueOf() === b.valueOf();
        }
      case "Boolean":
      case "Date":
        {
          return +a === +b;
        }
      case "RegExp":
        {
          return a.toString() === b.toString();
        }
      default:

    }

    if ((typeof a === "undefined" ? "undefined" : _typeof(a)) !== "object" || (typeof b === "undefined" ? "undefined" : _typeof(b)) !== "object") {
      return false;
    }

    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) {
        return bStack[length] === b;
      }
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0;

    if (typeA === "Array") {
      size = a.length;
      if (size !== b.length) {
        return false;
      }

      while (size--) {
        result = _equals_(a[size], b[size], aStack, bStack, hasKey_);
        if (!result) {
          return false;
        }
      }
    }

    // Deep compare objects.
    var aKeys = keys_(a, typeA === "Array");
    var key;
    size = aKeys.length;

    var bKeys = keys_(b, typeB === "Array");
    if (keys_(b, typeB === "Array").length !== size) {
      return false;
    }

    while (size--) {
      key = aKeys[size];

      // Deep compare each member
      result = hasKey_(b, key) && _equals_(a[key], b[key], aStack, bStack);

      if (!result) {
        return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();

    return result;
  };

  var equals_ = (function (a, b) {
    return _equals_(a, b);
  });

  var contains_ = (function (x, arr) {
    var index = -1;
    var flag = false;

    while (++index < arr.length && !flag) {
      if (equals_(arr[index], x)) {
        flag = true;
      }
    }

    return flag;
  });

  var contains = /*#__PURE__*/curry2_(contains_);

  var fnOrError_ = (function (symbolName, f) {
    if (!f || type_(f) !== "Function") {
      throw new Error(symbolName + " should be a function. " + ("Type received: " + type_(f) + ";  Value received: " + f + "."));
    }
    return f;
  });

  var concat$1 = function concat(f) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return f["concat"].apply(f, args);
  };

  var notFnErrPrefix = "`fn` in `curry(fn, ...args)`";
  var curryN = function curryN(executeArity, fn) {
    for (var _len2 = arguments.length, curriedArgs = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      curriedArgs[_key2 - 2] = arguments[_key2];
    }

    return function () {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var concatedArgs = concat$1(curriedArgs, args),
          canBeCalled = concatedArgs.length >= executeArity || !executeArity;
      return !canBeCalled ? curryN.apply(null, concat$1([executeArity, fnOrError_(notFnErrPrefix, fn)], concatedArgs)) : fnOrError_(notFnErrPrefix, fn).apply(null, concatedArgs);
    };
  };

  var prop_ = (function (name, keyedFunctor) {
    if (isNil_(keyedFunctor)) {
      return keyedFunctor;
    }

    if (keyedFunctor.get) {
      return keyedFunctor.get(name);
    }

    return keyedFunctor[name];
  });

  var reduceValues_ = (function (fn, initial, functor) {
    return reduce_(function (acc, value) {
      return fn(acc, value);
    }, initial, functor);
  });

  var path_ = (function (keys, tree) {
    if (typeof keys === "string") {
      keys = keys.trim().split(".");
    }

    return reduceValues_(function (acc, val) {
      return prop_(val, acc);
    }, tree, keys);
  });

  var merge_ = (function (left, right) {
    if (isNil_(left)) return right;
    if (isNil_(right)) return left;
    if (type_(left) !== type_(right)) {
      throw new Error("merge received a " + type_(left) + " and " + type_(right) + " which aren't the same");
    }
    switch (type_(left)) {
      case "Array":
        {
          return [].concat(toConsumableArray(left), toConsumableArray(right));
        }

      case "Object":
        {
          return _extends({}, left, right);
        }

      case "Map":
        {
          return new Map([].concat(toConsumableArray(left), toConsumableArray(right)));
        }

      case "Set":
        {
          return new Set([].concat(toConsumableArray(left), toConsumableArray(right)));
        }

      case "String":
        {
          return "" + left + right;
        }

      default:
        {
          throw new Error("merge doesn't know how to deal with " + type_(left));
        }
    }
  });

  var of_ = (function (key, value, functor) {
    switch (type_(functor)) {
      case "Array":
        {
          return [value];
        }
      case "Object":
        {
          return defineProperty({}, key, value);
        }
      case "Set":
        {
          return new Set([value]);
        }
      case "Map":
        {
          return new Map([[key, value]]);
        }
      case "String":
        {
          return "" + value;
        }

      default:
        {
          throw new Error("of doesn't know how to type " + type_(functor));
        }
    }
  });

  var mapValuesWithValueKey_ = (function (fn, functor) {
    if (functor.map instanceof Function) {
      return functor.map(function (value, key) {
        return fn(value, key);
      });
    }

    return reduce_(function (accumulated, value, key) {
      return merge_(accumulated, of_(key, fn(value, key), accumulated));
    }, empty_(functor), functor);
  });

  var mapValues_ = (function (fn, functor) {
    if (functor.map instanceof Function) {
      return functor.map(function (value) {
        return fn(value);
      });
    }

    return mapValuesWithValueKey_(function (value) {
      return fn(value);
    }, functor);
  });

  var isArray_ = (function (value) {
    return is_("Array", value);
  });

  var toArray_ = (function (v) {
    return isNil_(v) ? [] : isArray_(v) ? v : [v];
  });

  var pluck_ = (function (p, obj) {
    return mapValues_(function (x) {
      return path_(toArray_(p), x);
    }, obj);
  });

  var converge_ = (function (after, fns) {
    return curryN(reduceValues_(function (a, b) {
      return b > a ? b : a;
    }, 0, pluck_("length", fns)), function () {
      var args = arguments;
      var context = this;
      return after.apply(context, fns.map(function (fn) {
        return fn.apply(context, args);
      }));
    });
  });

  var converge = /*#__PURE__*/curry2_(converge_);

  var curry_ = (function (fn) {
    for (var _len = arguments.length, argsToCurry = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      argsToCurry[_key - 1] = arguments[_key];
    }

    return curryN.apply(undefined, [fnOrError_("`fn` in `curry(fn, ...args)`", fn).length, fn].concat(argsToCurry));
  });

  var replace_ = (function (regex, replacer, str) {
    return str.replace(regex, replacer);
  });

  var toString_ = (function (value) {
    var t = type_(value);
    if (t === 'null' || t === 'undefined') {
      return t;
    }
    if (t === 'String') {
      return value;
    }

    return typeof value.toString === "function" ? value.toString() : Object.prototype.toString.apply(value);
  });

  var dec_ = (function (x) {
    if (isNil_(x)) {
      return x;
    }
    if (is_("String", x)) {
      var xx = parseInt(x);

      return replace_(toString_(xx), toString_(xx - 1), x);
    } else {
      return x - 1;
    }
  });

  var defaultTo_ = (function (d, v) {
    return v == null || v !== v ? d : v;
  });

  var defaultTo = /*#__PURE__*/curry2_(defaultTo_);

  var divide_ = (function (a, b) {
    return a / b;
  });

  var divide = /*#__PURE__*/curry2_(divide_);

  var gt_ = (function (a, b) {
    return a > b;
  });

  var drop_ = (function (count, orderedList) {
     return reduce_(function (acc, value, index) {
        return gt_(index, count - 1) ? append_(value, acc) : acc;
     }, empty_(orderedList), orderedList);
  });

  var drop = /*#__PURE__*/curry2_(drop_);

  //export default (fn, left, right) => fn(right, left)
  // export default (fn) =>{
  //   return function() {
  //     return fn.apply(fn,[].slice.call(arguments).reverse())
  //   }
  // }

  //Uses Ramdas to flip curried or non-curried Fns
  var flip_ = (function (fn) {
    return curryN(fn.length, function (a, b) {
      var args = Array.prototype.slice.call(arguments, 0);
      args[0] = b;
      args[1] = a;
      return fn.apply(this, args);
    });
  });

  var values_ = (function (functor) {
    return reduceValues_(function (l, r) {
      return append_(r, l);
    }, [], functor);
  });

  var length_ = (function (obj) {
    return obj.length || obj.size || values_(obj).length;
  });

  var dropLast_ = (function (count, orderedList) {
    if (count < 0) return orderedList;
    var cnt = length_(orderedList) - count - 1;
    return reduce_(function (acc, v, idx) {
      return gt_(idx, cnt) ? acc : append_(v, acc);
    }, empty_(orderedList), orderedList);
  });

  var dropLast = /*#__PURE__*/curry2_(dropLast_);

  var either_ = (function (fn1, fn2) {
    return function () {
      return fn1.apply(fn1, arguments) || fn2.apply(fn2, arguments);
    };
  });

  var either = /*#__PURE__*/curry2_(either_);

  var endsWith_ = (function (subset, set) {
    return set.endsWith(subset);
  });

  var endsWith = /*#__PURE__*/curry2_(endsWith_);

  var equals = /*#__PURE__*/curry2_(equals_);

  var F_ = (function () {
    return false;
  });

  var filter = /*#__PURE__*/curry2_(filter_);

  var nth_ = (function (offset, list) {
    var idx = offset < 0 ? list.length + offset : offset;
    return is_("String", list) ? list.charAt(idx) : list[idx];
  });

  var first_ = (function (list) {
    return nth_(0, list);
  });

  var pipe_ = (function () {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return fns.reduce(function (f, g) {
      return function () {
        return g(f.apply(undefined, arguments));
      };
    });
  });

  var flow_ = (function (value) {
    for (var _len = arguments.length, argsToGive = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      argsToGive[_key - 1] = arguments[_key];
    }

    return pipe_.apply(undefined, argsToGive)(value);
  });

  var forEach_ = (function (fn, functor) {
    if (typeof functor.forEach === "function") {
      functor.forEach(function (value, key) {
        fn(value, key);
      });

      return functor;
    }

    return toPairs_(functor).forEach(function (_ref) {
      var _ref2 = slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      fn(value, key);
    });
  });

  var forEach = /*#__PURE__*/curry2_(forEach_);

  // // TODO: from Pairs

  var fromPairs_ = (function (list) {
    var obj = {};
    var i = 0;
    while (i < list.length) {
      obj[list[i][0]] = list[i][1];
      i++;
    }
    return obj;
  });

  var gt = /*#__PURE__*/curry2_(gt_);

  var has_ = (function (prop, obj) {
    return obj.hasOwnProperty(prop);
  });

  var has = /*#__PURE__*/curry2_(has_);

  var head_ = (function (x) {
    return dropLast_(1, x);
  });

  var identity_ = (function (a) {
    return a;
  });

  var curry4_ = (function (fn) {
    return curryN(4, fn);
  });

  var ifElse_ = (function (predicate, consequent, alternative, value) {
    return predicate(value) ? consequent(value) : alternative(value);
  });

  var ifElse = /*#__PURE__*/curry4_(ifElse_);

  var is = /*#__PURE__*/curry2_(is_);

  var isDefined_ = (function (value) {
    return !(value === undefined || value === null);
  });

  var isEmpty_ = (function (x) {
    return x != null && equals_(x, empty_(x));
  });

  var isNilOrEmpty_ = (function (value) {
    return isNil_(value) || isEmpty_(value);
  });

  var isObject_ = (function (value) {
    return is_("Object", value);
  });

  var join_ = (function (del, arr) {
    return arr.join(del);
  });

  var join = /*#__PURE__*/curry2_(join_);

  var juxt_ = (function (fns) {
      return converge_(function () {
          return Array.prototype.slice.call(arguments, 0);
      }, fns);
  });

  var reduceKeys_ = (function (fn, initial, functor) {
    return reduce_(function (acc, val, key) {
      return fn(acc, key);
    }, initial, functor);
  });

  var keys_$1 = (function (keyedObj) {
    return reduceKeys_(function (acc, key) {
      return append_(key, acc);
    }, [], keyedObj);
  });

  var last_ = (function (list) {
    return nth_(-1, list);
  });

  var lt_ = (function (a, b) {
    return a < b;
  });

  var lt = /*#__PURE__*/curry2_(lt_);

  var mapKeysWithValueKey_ = (function (fn, functor) {
    return reduce_(function (accumulated, value, key) {
      return merge_(accumulated, of_(fn(value, key), value, accumulated));
    }, empty_(functor), functor);
  });

  var mapKeys_ = (function (fn, functor) {
      return mapKeysWithValueKey_(function (v, key) {
          return fn(key);
      }, functor);
  });

  var mapKeys = /*#__PURE__*/curry2_(mapKeys_);

  var mapKeysWithValueKey = /*#__PURE__*/curry2_(mapKeysWithValueKey_);

  var mapValues = /*#__PURE__*/curry2_(mapValues_);

  var mapValuesWithValueKey = /*#__PURE__*/curry2_(mapValuesWithValueKey_);

  var max_ = (function (a, b) {
    return first_([].concat(toConsumableArray(toArray_(a)), toConsumableArray(toArray_(b))).sort(function (a, b) {
      return a < b;
    }));
  });

  var max = /*#__PURE__*/curry2_(max_);

  var merge = /*#__PURE__*/curry2_(merge_);

  var mergeAll_ = (function (functors) {
    if (last_(functors)) {
      return reduceValues_(merge_, empty_(last_(functors)), functors);
    }

    return functors;
  });

  var mergeWith_ = (function (fn, initial, functor) {
    return reduce_(function (acc, value, key) {
      if (prop_(key, acc)) {
        return attach_(key, fn(prop_(key, acc), value), acc);
      }

      return attach_(key, value, acc);
    }, initial, functor);
  });

  var mergeDeepRight_ = function mergeDeepRight_(left, right) {
    if (isArray_(left) && isArray_(right)) {
      return merge_(left, right);
    }

    if (isObject_(left) && isObject_(right)) {
      return mergeWith_(mergeDeepRight_, left, right);
    }

    return right;
  };

  var mergeDeepLeft_ = (function (left, right) {
    return mergeDeepRight_(right, left);
  });

  var mergeAllDeepLeft_ = (function (functors) {
    if (first_(functors)) {
      return reduceValues_(mergeDeepLeft_, empty_(first_(functors)), functors);
    }

    return functors;
  });

  var mergeAllDeepRight_ = (function (functors) {
    if (last_(functors)) {
      return reduceValues_(mergeDeepRight_, empty_(last_(functors)), functors);
    }

    return functors;
  });

  var mergeLeft_ = (function (left, right) {
    return merge_(right, left);
  });

  var mergeAllLeft_ = (function (functors) {
    if (first_(functors)) {
      return reduceValues_(mergeLeft_, empty_(first_(functors)), functors);
    }

    return functors;
  });

  var mergeDeepLeft = /*#__PURE__*/curry2_(mergeDeepLeft_);

  var mergeDeepRight = /*#__PURE__*/curry2_(mergeDeepRight_);

  var mergeLeft = /*#__PURE__*/curry2_(mergeLeft_);

  var mergeWith = /*#__PURE__*/curry3_(mergeWith_);

  var mergeWithKey_ = (function (fn, initial, functor) {
    return reduce_(function (acc, value, key) {
      if (acc[key]) {
        return _extends({}, acc, defineProperty({}, key, fn(acc[key], value, key)));
      }

      return attach_(key, value, acc);
    }, initial, functor);
  });

  var mergeWithKey = /*#__PURE__*/curry3_(mergeWithKey_);

  var min_ = (function (l, r) {
    return first_([].concat(toConsumableArray(toArray_(l)), toConsumableArray(toArray_(r))).sort(function (a, b) {
      return a > b;
    }));
  });

  var min = /*#__PURE__*/curry2_(min_);

  var multiply_ = (function (a, b) {
    return a * b;
  });

  var multiply = /*#__PURE__*/curry2_(multiply_);

  var not_ = (function (x) {
    return !x;
  });

  var nth = /*#__PURE__*/curry2_(nth_);

  var prepend_ = (function (value, orderedList) {
    switch (type_(orderedList)) {
      case "String":
        {
          return "" + value + orderedList;
        }
      case "Array":
        {
          return [value].concat(toConsumableArray(orderedList));
        }
      default:
        {
          throw new Error("prepend doesn't know how to deal with " + type_(orderedList));
        }
    }
  });

  var reverse_ = (function (orderedList) {
    return reduceValues_(function (acc, v) {
      return prepend_(v, acc);
    }, empty_(orderedList), orderedList);
  });

  var objOf_ = (function (keys, value) {
    if (typeof keys === "string") {
      keys = keys.trim().split(".");
    }
    return reduceValues_(function (acc, key) {
      return attach_(key, acc, {});
    }, value, reverse_(toArray_(keys)));
  });

  var objOf = /*#__PURE__*/curry2_(objOf_);

  var of = /*#__PURE__*/curry3_(of_);

  var or_ = (function (a, b) {
    return a || b;
  });

  var or = /*#__PURE__*/curry2_(or_);

  var pairsKeys_ = (function (pairs) {
    return mapValues_(first_, pairs);
  });

  var pairsValues_ = (function (pairs) {
    return mapValues_(last_, pairs);
  });

  var path = /*#__PURE__*/curry2_(path_);

  var pathOr_ = (function (d, p, obj) {
    return defaultTo_(d, path_(p, obj));
  });

  var pathOr = /*#__PURE__*/curry3_(pathOr_);

  var pick_ = (function (keys, keyedEnumerable) {
    return reduceValues_(function (acc, key) {
      var v = prop_(key, keyedEnumerable);
      return v ? merge_(acc, objOf_(key, v)) : acc;
    }, empty_(keyedEnumerable), keys);
  });

  var pick = /*#__PURE__*/curry2_(pick_);

  var pickAll_ = (function (keys, keyedEnumerable) {
    return reduceValues_(function (acc, key) {
      return merge_(acc, objOf_(key, prop_(key, keyedEnumerable)));
    }, empty_(keyedEnumerable), keys);
  });

  var pickAll = /*#__PURE__*/curry2_(pickAll_);

  var pluck = /*#__PURE__*/curry2_(pluck_);

  var plucks_ = (function (keychains, functor) {
    return mapValues_(juxt_(mapValues_(function (p) {
      return function (o) {
        return path_(p, o);
      };
    }, keychains)), functor);
  });

  var plucks = /*#__PURE__*/curry2_(plucks_);

  var prepend = /*#__PURE__*/curry2_(prepend_);

  var prop = /*#__PURE__*/curry2_(prop_);

  var propEq_ = (function (name, v, obj) {
    return equals_(v, prop_(name, obj));
  });

  var propEq = /*#__PURE__*/curry3_(propEq_);

  var props_ = (function (keys, keyedEnumerable) {
    if (is_('String', keys)) {
      keys = keys.trim().split(",");
    }
    if (!Array.isArray(keys)) return [];

    return reduceValues_(function (acc, key) {
      return append_(prop_(key, keyedEnumerable), acc);
    }, [], keys);
  });

  var props = /*#__PURE__*/curry2_(props_);

  var reduce = /*#__PURE__*/curry3_(function (reducer, initial, functor) {
    return reduce_(reducer, initial, functor, false);
  });

  var reduceKeys = /*#__PURE__*/curry3_(reduceKeys_);

  var reduceRight = /*#__PURE__*/curry3_(function (reducer, initial, functor) {
    return reduce_(reducer, initial, functor, true);
  });

  var reduceValues = /*#__PURE__*/curry3_(reduceValues_);

  var reduceWhile = /*#__PURE__*/curry4_(reduceWhile_);

  var reject = /*#__PURE__*/curry2_(reject_);

  var replace = /*#__PURE__*/curry3_(replace_);

  //From Lodash

  var round_ = (function (precision, number) {
    precision = precision == null ? 0 : Math.min(precision, 292);
    if (precision) {
      var pair = (number + 'e').split('e');
      var value = Math.round(pair[0] + 'e' + (+pair[1] + precision));
      pair = (value + 'e').split('e');
      return +(pair[0] + 'e' + (+pair[1] - precision));
    }

    return Math.round(number);
  });

  var round = /*#__PURE__*/curry2_(round_);

  var simplyEquals_ = (function (a, b) {
    return a === b;
  });

  var simplyEquals = /*#__PURE__*/curry2_(simplyEquals_);

  var split_ = (function (separator, str) {
    return str.split(separator);
  });

  var split = /*#__PURE__*/curry2_(split_);

  var cloneRegExp_ = (function (pattern) {
    return new RegExp(pattern.source, (pattern.global ? "g" : "") + (pattern.ignoreCase ? "i" : "") + (pattern.multiline ? "m" : "") + (pattern.sticky ? "y" : "") + (pattern.unicode ? "u" : ""));
  });

  var test_ = (function (pattern, str) {
    if (type_(pattern) !== 'RegExp') {
      throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + type_(pattern));
    }
    return cloneRegExp_(pattern).test(str);
  });

  var startsWith_ = (function (subset, set) {
    return set.startsWith(subset);
  });

  var startsWith = /*#__PURE__*/curry2_(startsWith_);

  var T_ = (function () {
    return true;
  });

  var tail_ = (function (x) {
    return drop_(1, x);
  });

  var take_ = (function (count, orderedList) {
    return count < 0 ? orderedList : reduce_(function (acc, v, idx) {
      return gt_(idx, count - 1) ? acc : append_(v, acc);
    }, empty_(orderedList), orderedList);
  });

  var take = /*#__PURE__*/curry2_(take_);

  var takeLast_ = (function (count, orderedList) {
    if (count < 0) return orderedList;
    var cnt = length_(orderedList) - count;
    return reduce_(function (acc, v, idx) {
      return lt_(idx, cnt) ? acc : append_(v, acc);
    }, empty_(orderedList), orderedList);
  });

  var takeLast = /*#__PURE__*/curry2_(takeLast_);

  var test = /*#__PURE__*/curry2_(test_);

  var toLower_ = (function (str) {
    return str.toLowerCase();
  });

  var unless_ = (function (cond, fn, val) {
    return cond(val) ? val : fn(val);
  });

  var unless = /*#__PURE__*/curry3_(unless_);

  var when_ = (function (condition, whenTrueFn, input) {
      var flag = typeof condition === "boolean" ? condition : condition(input);
      return flag ? whenTrueFn(input) : input;
  });

  var when = /*#__PURE__*/curry3_(when_);

  var where_ = (function (matcher, keyedEnumerable) {
    return reduce_(function (latest, value, key) {
      return latest && value(path_(toArray_(key), keyedEnumerable));
    }, true, matcher);
  });

  var where = /*#__PURE__*/curry2_(where_);

  exports.always = always_;
  exports.any = any;
  exports.anyPass = anyPass;
  exports.append = append;
  exports.applyTo = applyTo;
  exports.attach = attach;
  exports.both = both_;
  exports.compact = compact_;
  exports.complement = complement;
  exports.compose = compose_;
  exports.concat = concat;
  exports.contains = contains;
  exports.converge = converge;
  exports.curry = curry_;
  exports.curryN = curryN;
  exports.dec = dec_;
  exports.defaultTo = defaultTo;
  exports.divide = divide;
  exports.drop = drop;
  exports.dropLast = dropLast;
  exports.either = either;
  exports.empty = empty_;
  exports.endsWith = endsWith;
  exports.equals = equals;
  exports.F = F_;
  exports.filter = filter;
  exports.first = first_;
  exports.flip = flip_;
  exports.flow = flow_;
  exports.fnOrError = fnOrError_;
  exports.forEach = forEach;
  exports.fromIteratorToArray = fromIteratorToArray_;
  exports.fromPairs = fromPairs_;
  exports.gt = gt;
  exports.has = has;
  exports.head = head_;
  exports.identity = identity_;
  exports.ifElse = ifElse;
  exports.is = is;
  exports.isArray = isArray_;
  exports.isDefined = isDefined_;
  exports.isEmpty = isEmpty_;
  exports.isNil = isNil_;
  exports.isNilOrEmpty = isNilOrEmpty_;
  exports.isObject = isObject_;
  exports.join = join;
  exports.juxt = juxt_;
  exports.keys = keys_$1;
  exports.last = last_;
  exports.length = length_;
  exports.lt = lt;
  exports.mapKeys = mapKeys;
  exports.mapKeysWithValueKey = mapKeysWithValueKey;
  exports.mapValues = mapValues;
  exports.mapValuesWithValueKey = mapValuesWithValueKey;
  exports.max = max;
  exports.merge = merge;
  exports.mergeAll = mergeAll_;
  exports.mergeAllDeepLeft = mergeAllDeepLeft_;
  exports.mergeAllDeepRight = mergeAllDeepRight_;
  exports.mergeAllLeft = mergeAllLeft_;
  exports.mergeDeepLeft = mergeDeepLeft;
  exports.mergeDeepRight = mergeDeepRight;
  exports.mergeLeft = mergeLeft;
  exports.mergeWith = mergeWith;
  exports.mergeWithKey = mergeWithKey;
  exports.min = min;
  exports.multiply = multiply;
  exports.not = not_;
  exports.nth = nth;
  exports.objOf = objOf;
  exports.of = of;
  exports.or = or;
  exports.pairsKeys = pairsKeys_;
  exports.pairsValues = pairsValues_;
  exports.path = path;
  exports.pathOr = pathOr;
  exports.pick = pick;
  exports.pickAll = pickAll;
  exports.pipe = pipe_;
  exports.pluck = pluck;
  exports.plucks = plucks;
  exports.prepend = prepend;
  exports.prop = prop;
  exports.propEq = propEq;
  exports.props = props;
  exports.reduce = reduce;
  exports.reduceKeys = reduceKeys;
  exports.reduceRight = reduceRight;
  exports.reduceValues = reduceValues;
  exports.reduceWhile = reduceWhile;
  exports.reject = reject;
  exports.replace = replace;
  exports.reverse = reverse_;
  exports.round = round;
  exports.simplyEquals = simplyEquals;
  exports.split = split;
  exports.startsWith = startsWith;
  exports.T = T_;
  exports.tail = tail_;
  exports.take = take;
  exports.takeLast = takeLast;
  exports.test = test;
  exports.toArray = toArray_;
  exports.toLower = toLower_;
  exports.toPairs = toPairs_;
  exports.toString = toString_;
  exports.type = type_;
  exports.unless = unless;
  exports.values = values_;
  exports.when = when;
  exports.where = where;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
