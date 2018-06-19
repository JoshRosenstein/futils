(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.futils_ = {})));
}(this, (function (exports) { 'use strict';

  var always_ = (function (x) {
    return function () {
      return x;
    };
  });

  var anyPass_ = (function (fns, value) {
    var i = 0;
    var length = fns.length;
    while (i < length && !fns[i](value)) {
      i += 1;
    }
    return i < length;
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

  var applyTo_ = (function (value, fn) {
    return fn(value);
  });

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

  var both_ = (function (fn1, fn2) {
    return function () {
      return fn1.apply(fn1, arguments) && fn2.apply(fn2, arguments);
    };
  });

  var cloneRegExp_ = (function (pattern) {
    return new RegExp(pattern.source, (pattern.global ? "g" : "") + (pattern.ignoreCase ? "i" : "") + (pattern.multiline ? "m" : "") + (pattern.sticky ? "y" : "") + (pattern.unicode ? "u" : ""));
  });

  var is_ = (function (sig, value) {
    return sig === "null" ? value === null : sig === "undefined" ? value === undefined : value === undefined || value === null ? false : type_(value) === sig;
  });

  var _isArguments = function () {
    return Object.prototype.toString.call(arguments) === "[object Arguments]" ? function _isArguments(x) {
      return Object.prototype.toString.call(x) === "[object Arguments]";
    } : function _isArguments(x) {
      return Object.prototype.hasOwnProperty.call(x, "callee");
    };
  }();
  var empty_ = (function (x) {
    return x != null && typeof x.empty === "function" ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === "function" ? x.constructor.empty() : is_("Array", x) ? [] : is_("String", x) ? "" : is_("Object", x) ? {} : is_("Map", x) ? new Map() : is_("Set", x) ? new Set() : _isArguments(x) ? function () {
      return arguments;
    }() :
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
      return keys.concat(Object.getOwnPropertySymbols(o).filter(
      function (symbol) {
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
      if (aStack[length] === a) {
        return bStack[length] === b;
      }
    }
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
    var aKeys = keys_(a, typeA === "Array");
    var key;
    size = aKeys.length;
    var bKeys = keys_(b, typeB === "Array");
    if (keys_(b, typeB === "Array").length !== size) {
      return false;
    }
    while (size--) {
      key = aKeys[size];
      result = hasKey_(b, key) && _equals_(a[key], b[key], aStack, bStack);
      if (!result) {
        return false;
      }
    }
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

  var fnOrError_ = (function (symbolName, f) {
    if (!f || type_(f) !== "Function") {
      throw new Error(symbolName + " should be a function. " + ("Type received: " + type_(f) + ";  Value received: " + f + "."));
    }
    return f;
  });

  var concat = function concat(f) {
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
      var concatedArgs = concat(curriedArgs, args),
          canBeCalled = concatedArgs.length >= executeArity || !executeArity;
      return !canBeCalled ? curryN.apply(null, concat([executeArity, fnOrError_(notFnErrPrefix, fn)], concatedArgs)) : fnOrError_(notFnErrPrefix, fn).apply(null, concatedArgs);
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

  var curry2_ = (function (f) {
    return function curried(a, b) {
      return arguments.length >= 2 ? f(a, b) : function (b2) {
        return f(a, b2);
      };
    };
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

  var curry4_ = (function (fn) {
    return curryN(4, fn);
  });

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

  var divide_ = (function (a, b) {
    return a / b;
  });

  var gt_ = (function (a, b) {
    return a > b;
  });

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

  var drop_ = (function (count, orderedList) {
     return reduce_(function (acc, value, index) {
        return gt_(index, count - 1) ? append_(value, acc) : acc;
     }, empty_(orderedList), orderedList);
  });

  var either_ = (function (fn1, fn2) {
    return function () {
      return fn1.apply(fn1, arguments) || fn2.apply(fn2, arguments);
    };
  });

  var endsWith_ = (function (subset, set) {
    return set.endsWith(subset);
  });

  var escapeString_ = (function (str) {
    if (typeof str !== "string") {
      throw new TypeError("Expected a string");
    }
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  });

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

  var fromPairs_ = (function (list) {
    var obj = {};
    var i = 0;
    while (i < list.length) {
      obj[list[i][0]] = list[i][1];
      i++;
    }
    return obj;
  });

  var F_ = (function () {
    return false;
  });

  var has_ = (function (prop, obj) {
    return obj.hasOwnProperty(prop);
  });

  var head_ = (function (x) {
    return dropLast_(1, x);
  });

  var identity_ = (function (a) {
    return a;
  });

  var ifElse_ = (function (predicate, consequent, alternative, value) {
    return predicate(value) ? consequent(value) : alternative(value);
  });

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

  function lambda_ (exp) {
    if (!is_("String", exp)) {
      return;
    }
    var parts = exp.match(/(.*)\s*[=-]>\s*(.*)/);
    parts.shift();
    var params = parts.shift().replace(/^\s*|\s(?=\s)|\s*$|,/g, "").split(" ");
    var body = parts.shift();
    parts = (!/\s*return\s+/.test(body) ? "return " : "") + body;
    params.push(parts);
    return Function.apply({}, params);
  }

  var last_ = (function (list) {
    return nth_(-1, list);
  });

  var lt_ = (function (a, b) {
    return a < b;
  });

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

  var max_ = (function (a, b) {
    return first_([].concat(toConsumableArray(toArray_(a)), toConsumableArray(toArray_(b))).sort(function (a, b) {
      return a < b;
    }));
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

  var mergeAll_ = (function (functors) {
    if (last_(functors)) {
      return reduceValues_(merge_, empty_(last_(functors)), functors);
    }
    return functors;
  });

  var mergeWithKey_ = (function (fn, initial, functor) {
    return reduce_(function (acc, value, key) {
      if (acc[key]) {
        return _extends({}, acc, defineProperty({}, key, fn(acc[key], value, key)));
      }
      return attach_(key, value, acc);
    }, initial, functor);
  });

  var min_ = (function (l, r) {
    return first_([].concat(toConsumableArray(toArray_(l)), toConsumableArray(toArray_(r))).sort(function (a, b) {
      return a > b;
    }));
  });

  var multiply_ = (function (a, b) {
    return a * b;
  });

  var not_ = (function (x) {
    return !x;
  });

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

  var or_ = (function (a, b) {
    return a || b;
  });

  var pairsKeys_ = (function (pairs) {
    return mapValues_(first_, pairs);
  });

  var pairsValues_ = (function (pairs) {
    return mapValues_(last_, pairs);
  });

  var pathOr_ = (function (d, p, obj) {
    return defaultTo_(d, path_(p, obj));
  });

  var pickAll_ = (function (keys, keyedEnumerable) {
    return reduceValues_(function (acc, key) {
      return merge_(acc, objOf_(key, prop_(key, keyedEnumerable)));
    }, empty_(keyedEnumerable), keys);
  });

  var pick_ = (function (keys, keyedEnumerable) {
    return reduceValues_(function (acc, key) {
      var v = prop_(key, keyedEnumerable);
      return v ? merge_(acc, objOf_(key, v)) : acc;
    }, empty_(keyedEnumerable), keys);
  });

  var plucks_ = (function (keychains, functor) {
    return mapValues_(juxt_(mapValues_(function (p) {
      return function (o) {
        return path_(p, o);
      };
    }, keychains)), functor);
  });

  var propEq_ = (function (name, v, obj) {
    return equals_(v, prop_(name, obj));
  });

  var propOr_ = (function (d, name, keyedFunctor) {
    return defaultTo_(d, prop_(name, keyedFunctor));
  });

  var props_ = (function (keys, keyedEnumerable) {
    if (is_('String', keys)) {
      keys = keys.trim().split(",");
    }
    if (!Array.isArray(keys)) return [];
    return reduceValues_(function (acc, key) {
      return append_(prop_(key, keyedEnumerable), acc);
    }, [], keys);
  });

  var reduceRight_ = (function (reducer, initial, functor) {
    return reduce_(reducer, initial, functor, true);
  });

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

  var simplyEquals_ = (function (a, b) {
    return a === b;
  });

  var split_ = (function (separator, str) {
    return str.split(separator);
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

  var tail_ = (function (x) {
    return drop_(1, x);
  });

  var takeLast_ = (function (count, orderedList) {
    if (count < 0) return orderedList;
    var cnt = length_(orderedList) - count;
    return reduce_(function (acc, v, idx) {
      return lt_(idx, cnt) ? acc : append_(v, acc);
    }, empty_(orderedList), orderedList);
  });

  var take_ = (function (count, orderedList) {
    return count < 0 ? orderedList : reduce_(function (acc, v, idx) {
      return gt_(idx, count - 1) ? acc : append_(v, acc);
    }, empty_(orderedList), orderedList);
  });

  var toLower_ = (function (str) {
    return str.toLowerCase();
  });

  var T_ = (function () {
    return true;
  });

  var unless_ = (function (cond, fn, val) {
    return cond(val) ? val : fn(val);
  });

  var when_ = (function (condition, whenTrueFn, input) {
      var flag = typeof condition === "boolean" ? condition : condition(input);
      return flag ? whenTrueFn(input) : input;
  });

  var where_ = (function (matcher, keyedEnumerable) {
    return reduce_(function (latest, value, key) {
      return latest && value(path_(toArray_(key), keyedEnumerable));
    }, true, matcher);
  });

  exports.always_ = always_;
  exports.anyPass_ = anyPass_;
  exports.any_ = any_;
  exports.append_ = append_;
  exports.applyTo_ = applyTo_;
  exports.attach_ = attach_;
  exports.both_ = both_;
  exports.cloneRegExp_ = cloneRegExp_;
  exports.compact_ = compact_;
  exports.complement_ = complement_;
  exports.compose_ = compose_;
  exports.concat_ = concat_;
  exports.contains_ = contains_;
  exports.converge_ = converge_;
  exports.curry2_ = curry2_;
  exports.curry3_ = curry3_;
  exports.curry4_ = curry4_;
  exports.curryN_ = curryN;
  exports.curry_ = curry_;
  exports.dec_ = dec_;
  exports.defaultTo_ = defaultTo_;
  exports.divide_ = divide_;
  exports.dropLast_ = dropLast_;
  exports.drop_ = drop_;
  exports.either_ = either_;
  exports.empty_ = empty_;
  exports.endsWith_ = endsWith_;
  exports.equals_ = equals_;
  exports.escapeString_ = escapeString_;
  exports.filter_ = filter_;
  exports.first_ = first_;
  exports.flip_ = flip_;
  exports.flow_ = flow_;
  exports.fnOrError_ = fnOrError_;
  exports.forEach_ = forEach_;
  exports.fromIteratorToArray_ = fromIteratorToArray_;
  exports.fromPairs_ = fromPairs_;
  exports.F_ = F_;
  exports.gt_ = gt_;
  exports.has_ = has_;
  exports.head_ = head_;
  exports.identity_ = identity_;
  exports.ifElse_ = ifElse_;
  exports.isArray_ = isArray_;
  exports.isDefined_ = isDefined_;
  exports.isEmpty_ = isEmpty_;
  exports.isNilOrEmpty_ = isNilOrEmpty_;
  exports.isNil_ = isNil_;
  exports.isObject_ = isObject_;
  exports.is_ = is_;
  exports.join_ = join_;
  exports.juxt_ = juxt_;
  exports.keys_ = keys_$1;
  exports.lambda_ = lambda_;
  exports.last_ = last_;
  exports.length_ = length_;
  exports.lt_ = lt_;
  exports.mapKeysWithValueKey_ = mapKeysWithValueKey_;
  exports.mapKeys_ = mapKeys_;
  exports.mapValuesWithValueKey_ = mapValuesWithValueKey_;
  exports.mapValues_ = mapValues_;
  exports.max_ = max_;
  exports.mergeAllDeepLeft_ = mergeAllDeepLeft_;
  exports.mergeAllDeepRight_ = mergeAllDeepRight_;
  exports.mergeAllLeft_ = mergeAllLeft_;
  exports.mergeAll_ = mergeAll_;
  exports.mergeDeepLeft_ = mergeDeepLeft_;
  exports.mergeDeepRight_ = mergeDeepRight_;
  exports.mergeLeft_ = mergeLeft_;
  exports.mergeWithKey_ = mergeWithKey_;
  exports.mergeWith_ = mergeWith_;
  exports.merge_ = merge_;
  exports.min_ = min_;
  exports.multiply_ = multiply_;
  exports.not_ = not_;
  exports.nth_ = nth_;
  exports.objOf_ = objOf_;
  exports.of_ = of_;
  exports.or_ = or_;
  exports.pairsKeys_ = pairsKeys_;
  exports.pairsValues_ = pairsValues_;
  exports.pathOr_ = pathOr_;
  exports.path_ = path_;
  exports.pickAll_ = pickAll_;
  exports.pick_ = pick_;
  exports.pipe_ = pipe_;
  exports.plucks_ = plucks_;
  exports.pluck_ = pluck_;
  exports.prepend_ = prepend_;
  exports.propEq_ = propEq_;
  exports.propOr_ = propOr_;
  exports.props_ = props_;
  exports.prop_ = prop_;
  exports.reduceKeys_ = reduceKeys_;
  exports.reduceRight_ = reduceRight_;
  exports.reduceValues_ = reduceValues_;
  exports.reduceWhile_ = reduceWhile_;
  exports.reduce_ = reduce_;
  exports.reject_ = reject_;
  exports.replace_ = replace_;
  exports.reverse_ = reverse_;
  exports.round_ = round_;
  exports.simplyEquals_ = simplyEquals_;
  exports.split_ = split_;
  exports.startsWith_ = startsWith_;
  exports.tail_ = tail_;
  exports.takeLast_ = takeLast_;
  exports.take_ = take_;
  exports.test_ = test_;
  exports.toArray_ = toArray_;
  exports.toLower_ = toLower_;
  exports.toPairs_ = toPairs_;
  exports.toString_ = toString_;
  exports.type_ = type_;
  exports.T_ = T_;
  exports.unless_ = unless_;
  exports.values_ = values_;
  exports.when_ = when_;
  exports.where_ = where_;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
