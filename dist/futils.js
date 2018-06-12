(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.futils = {})));
}(this, (function (exports) { 'use strict';

  var always = (function (x) {
    return function () {
      return x;
    };
  });

  var type = (function (value) {
    if (value === null) {
      return "null";
    }
    if (value === undefined) {
      return "undefined";
    }
    return value.constructor.name;
  });

  var fnOrError = (function (symbolName, f) {
    if (!f || typeof f !== "function") {
      throw new Error(symbolName + " should be a function. " + ("Type received: " + type(f) + ";  Value received: " + f + "."));
    }
    return f;
  });

  var takesN = function takesN(name) {
    return function (f) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return f[name].apply(f, args);
    };
  };
  var length = function length(x) {
    return x.length;
  };
  var concat = takesN("concat");
  var apply = function apply(fn, args) {
    return fn.apply(null, args);
  };

  var notFnErrPrefix = "`fn` in `curry(fn, ...args)`";
  var curryN = function curryN(executeArity, fn) {
    for (var _len = arguments.length, curriedArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      curriedArgs[_key - 2] = arguments[_key];
    }
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      var concatedArgs = concat(curriedArgs, args),
          canBeCalled = length(concatedArgs) >= executeArity || !executeArity;
      return !canBeCalled ? apply(curryN, concat([executeArity, fnOrError(notFnErrPrefix, fn)], concatedArgs)) : apply(fnOrError(notFnErrPrefix, fn), concatedArgs);
    };
  };
  var curry = function curry(fn) {
    for (var _len3 = arguments.length, argsToCurry = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      argsToCurry[_key3 - 1] = arguments[_key3];
    }
    return curryN.apply(undefined, [fnOrError(notFnErrPrefix, fn).length, fn].concat(argsToCurry));
  };
  var curry2 = function curry2(f) {
    return function curried(a, b) {
      return arguments.length >= 2 ? f(a, b) : function (b2) {
        return f(a, b2);
      };
    };
  };
  var curry3 = function curry3(f) {
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
  };
  var curry4 = function curry4(fn) {
    return curryN(4, fn);
  };

  var anyPass_ = function anyPass_(fns, value) {
    var i = 0;
    var length = fns.length;
    while (i < length && !fns[i](value)) {
      i += 1;
    }
    return i < length;
  };
  var index = curry2(anyPass_);

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

  var append_ = function append_(value, orderedList) {
    switch (type(orderedList)) {
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
          throw new TypeError("append doesn't know how to deal with " + type(orderedList));
        }
    }
  };
  var append = curry2(append_);

  var applyTo_ = function applyTo_(value, fn) {
    return fn(value);
  };
  var index$1 = curry2(applyTo_);

  var attach_ = function attach_(key, value, functor) {
    switch (type(functor)) {
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
          throw new Error("attach doesn't know how to set a key and value on " + type(functor));
        }
    }
  };
  var index$2 = curry3(attach_);

  var index$3 = (function (fn1, fn2) {
    return function () {
      return fn1.apply(fn1, arguments) && fn2.apply(fn2, arguments);
    };
  });

  var is_ = function is_(sig, value) {
    return sig === "null" ? value === null : sig === "undefined" ? value === undefined : value === undefined || value === null ? false : type(value) === sig;
  };
  var is = curry2(is_);

  var toString$1 = Object.prototype.toString;
  function _has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  var _isArguments = function () {
    return toString$1.call(arguments) === "[object Arguments]" ? function _isArguments(x) {
      return toString$1.call(x) === "[object Arguments]";
    } : function _isArguments(x) {
      return _has("callee", x);
    };
  }();
  var empty = (function (x) {
    return x != null && typeof x.empty === "function" ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === "function" ? x.constructor.empty() : is_("Array", x) ? [] : is_("String", x) ? "" : is_("Object", x) ? {} : is_("Map", x) ? new Map() : is_("Set", x) ? new Set() : _isArguments(x) ? function () {
      return arguments;
    }() :
    void 0;
  });

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
  var fromIteratorToArray = (function (iterator) {
    return fromIteratorToArrayIterator([])(iterator);
  });

  var toPairs = (function (pairableObj) {
    switch (type(pairableObj)) {
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
          return fromIteratorToArray(pairableObj.values()).map(function (value) {
            return [undefined, value];
          });
        }
      case "Map":
        {
          return fromIteratorToArray(pairableObj.entries());
        }
      default:
        {
          throw new Error("fromFunctorToPairs doesn't know how to handle " + type(pairableObj));
        }
    }
  });

  var reduceWithValueKey_ = function reduceWithValueKey_(reducer, initial, functor, right) {
    var fn = void 0;
    switch (type(functor)) {
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
        functor = toPairs(functor);
        break;
      case "Set":
        fn = function fn(acc, _ref3) {
          var _ref4 = slicedToArray(_ref3, 2),
              value = _ref4[1];
          return reducer(acc, value);
        };
        functor = toPairs(functor);
        break;
      case "String":
        fn = function fn(acc, _ref5) {
          var _ref6 = slicedToArray(_ref5, 2),
              key = _ref6[0],
              value = _ref6[1];
          return reducer(acc, value, key);
        };
        functor = toPairs(functor.split(""));
        break;
      default:
        {
          throw new Error("reduceWithValueKey couldn't figure out how to reduce " + type(functor));
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
  };
  var index$4 = curry3(function (reducer, initial, functor) {
    return reduceWithValueKey_(reducer, initial, functor, false);
  });

  var filter_ = function filter_(predicate, enumerable) {
    if (enumerable.filter) {
      return enumerable.filter(predicate);
    }
    return reduceWithValueKey_(function (accumulated, value, key) {
      return predicate(value) ? attach_(key, value, accumulated) : accumulated;
    }, empty(enumerable), enumerable);
  };
  var index$5 = curry2(filter_);

  var reject_ = function reject_(predicate, enumerable) {
    if (enumerable.reject) {
      return enumerable.reject(predicate);
    }
    return filter_(function (v) {
      return !predicate(v);
    }, enumerable);
  };
  var index$6 = curry2(reject_);

  var isNil = (function (value) {
    return is_("undefined", value) || is_("null", value);
  });

  var index$7 = (function (collection) {
    return reject_(isNil, collection);
  });

  var complement_ = function complement_(predicate, anything) {
    return !predicate(anything);
  };
  var index$8 = curry2(complement_);

  var index$9 = (function () {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }
    return fns.reduce(function (f, g) {
      return function () {
        return f(g.apply(undefined, arguments));
      };
    });
  });

  var concat_ = function concat_(a, b) {
    return is_("Array", a) && is_("Array", b) || is_("String", a) && is_("String", b) ? a.concat(b) : null;
  };
  var index$a = curry2(concat_);

  var notFnErrPrefix$1 = "`fn` in `curry(fn, ...args)`";
  var curryN$1 = function curryN(executeArity, fn) {
    for (var _len = arguments.length, curriedArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      curriedArgs[_key - 2] = arguments[_key];
    }
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      var concatedArgs = concat(curriedArgs, args),
          canBeCalled = length(concatedArgs) >= executeArity || !executeArity;
      return !canBeCalled ? apply(curryN, concat([executeArity, fnOrError(notFnErrPrefix$1, fn)], concatedArgs)) : apply(fnOrError(notFnErrPrefix$1, fn), concatedArgs);
    };
  };

  var prop_ = function prop_(name, keyedFunctor) {
    if (isNil(keyedFunctor)) {
      return keyedFunctor;
    }
    if (keyedFunctor.get) {
      return keyedFunctor.get(name);
    }
    return keyedFunctor[name];
  };
  var index$b = curry2(prop_);

  var reduceValues_ = function reduceValues_(fn, initial, functor) {
    return reduceWithValueKey_(function (acc, value) {
      return fn(acc, value);
    }, initial, functor);
  };
  var reduceValues = curry3(reduceValues_);

  var path_ = function path_(keychain, tree) {
    return reduceValues_(function (acc, val) {
      return prop_(val, acc);
    }, tree, keychain);
  };
  var path = curry2(path_);

  var mergeRight_ = function mergeRight_(left, right) {
    if (type(left) !== type(right)) {
      throw new Error("mergeRight received a " + type(left) + " and " + type(right) + " which aren't the same");
    }
    switch (type(left)) {
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
          throw new Error("mergeRight doesn't know how to deal with " + type(left));
        }
    }
  };
  var index$c = curry2(mergeRight_);

  var of_ = function of_(key, value, functor) {
    switch (type(functor)) {
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
          throw new Error("of doesn't know how to type " + type(functor));
        }
    }
  };
  var index$d = curry3(of_);

  var mapValuesWithValueKey_ = function mapValuesWithValueKey_(fn, functor) {
    if (functor.map instanceof Function) {
      return functor.map(function (value, key) {
        return fn(value, key);
      });
    }
    return reduceWithValueKey_(function (accumulated, value, key) {
      return mergeRight_(accumulated, of_(key, fn(value, key), accumulated));
    }, empty(functor), functor);
  };
  var index$e = curry2(mapValuesWithValueKey_);

  var mapValues_ = function mapValues_(fn, functor) {
    if (functor.map instanceof Function) {
      return functor.map(function (value) {
        return fn(value);
      });
    }
    return mapValuesWithValueKey_(function (value) {
      return fn(value);
    }, functor);
  };
  var mapValues = curry2(mapValues_);

  var toArray$1 = (function (value) {
    if (is_("Array", value)) {
      return value;
    }
    return [value];
  });

  var pluck_ = function pluck_(p, obj) {
    return mapValues_(function (x) {
      return path_(toArray$1(p), x);
    }, obj);
  };
  var index$f = curry2(pluck_);

  var converge = function converge(after, fns) {
    return curryN$1(reduceValues_(function (a, b) {
      return b > a ? b : a;
    }, 0, pluck_("length", fns)), function () {
      var args = arguments;
      var context = this;
      return after.apply(context, fns.map(function (fn) {
        return fn.apply(context, args);
      }));
    });
  };
  var converge$1 = curry2(converge);

  var replace_ = function replace_(regex, replacer, str) {
    return str.replace(regex, replacer);
  };
  var replace = curry3(replace_);

  var _quote = function _quote(s) {
    var escaped = s.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b")
    .replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
    return '"' + escaped.replace(/"/g, '\\"') + '"';
  };
  var toString$2 = (function (value) {
    if (value === null) {
      return "null";
    }
    if (value === undefined) {
      return "undefined";
    }
    if (is_("String", value)) {
      return _quote(value);
    }
    return !isNil(value) && typeof value.toString === "function" ? value.toString() : Object.prototype.toString.apply(value);
  });

  var index$g = (function (x) {
    if (isNil(x)) {
      return x;
    }
    if (is("String")(x)) {
      var xx = parseInt(x);
      return replace(toString$2(xx), toString$2(xx - 1), x);
    } else {
      return x - 1;
    }
  });

  var defaultTo_ = function defaultTo_(d, v) {
    return v == null || v !== v ? d : v;
  };
  var index$h = curry2(defaultTo_);

  var divide = function divide(a, b) {
    return a / b;
  };
  var index$i = curry2(divide);

  var gt_ = function gt_(a, b) {
    return a > b;
  };
  var index$j = curry2(gt_);

  var dropFirst_ = function dropFirst_(count, orderedList) {
    return reduceWithValueKey_(function (acc, value, index) {
      if (gt_(index, count - 1)) {
        return append_(value, acc);
      }
      return acc;
    }, empty(orderedList), orderedList);
  };
  var index$k = curry2(dropFirst_);

  var index$l = (function (fn1, fn2) {
    return function () {
      return fn1.apply(fn1, arguments) || fn2.apply(fn2, arguments);
    };
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
  var equals_ = function equals_(a, b, aStack, bStack) {
    var result = true;
    if (a === b) return true;
    if (a == null || b == null) return a === b;
    var typeA = type(a);
    var typeB = type(b);
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
        result = equals_(a[size], b[size], aStack, bStack, hasKey_);
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
      result = hasKey_(b, key) && equals_(a[key], b[key], aStack, bStack);
      if (!result) {
        return false;
      }
    }
    aStack.pop();
    bStack.pop();
    return result;
  };
  var index$m = curry2(function (a, b) {
    return equals_(a, b, [], []);
  });

  var index$n = always(false);

  var flip = curry3(function (fn, left, right) {
    return fn(right, left);
  });

  var pipe = (function () {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }
    return fns.reduce(function (f, g) {
      return function () {
        return g(f.apply(undefined, arguments));
      };
    });
  });

  var index$o = (function (value) {
    for (var _len = arguments.length, argsToGive = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      argsToGive[_key - 1] = arguments[_key];
    }
    return pipe.apply(undefined, argsToGive)(value);
  });

  var forEach_ = function forEach_(fn, functor) {
    if (typeof functor.forEach === "function") {
      functor.forEach(function (value, key) {
        fn(value)(key);
      });
      return functor;
    }
    return toPairs(functor).forEach(function (_ref) {
      var _ref2 = slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
      fn(value)(key);
    });
  };
  var index$p = curry2(forEach_);

  var nth_ = function nth_(offset, list) {
    var idx = offset < 0 ? list.length + offset : offset;
    return is_("String", list) ? list.charAt(idx) : list[idx];
  };
  var nth = curry2(nth_);

  var head = (function (list) {
    return nth_(0, list);
  });

  var index$q = (function (a) {
    return a;
  });

  var ifElse_ = function ifElse_(predicate, consequent, alternative, value) {
    predicate(value) ? consequent(value) : alternative(value);
  };
  var index$r = curry4(ifElse_);

  var isArray = (function (value) {
    return is_("Array", value);
  });

  var index$s = (function (value) {
    return !(value === undefined || value === null);
  });

  var index$t = (function (x) {
    return x != null && x === empty(x);
  });

  var isObject = (function (value) {
    return is_("Object", value);
  });

  var juxt = (function (fns) {
      return converge$1(function () {
          return Array.prototype.slice.call(arguments, 0);
      }, fns);
  });

  var reduceKeys_ = function reduceKeys_(fn, initial, functor) {
    return reduceWithValueKey_(function (acc, val, key) {
      return fn(acc, key);
    }, initial, functor);
  };
  var index$u = curry3(reduceKeys_);

  var index$v = (function (keyedObj) {
    return reduceKeys_(function (acc, key) {
      return append_(key, acc);
    }, [], keyedObj);
  });

  var last = (function (list) {
    return nth_(-1, list);
  });

  var mapKeysWithValueKey_ = function mapKeysWithValueKey_(fn, functor) {
    return reduceWithValueKey_(function (accumulated, value, key) {
      return mergeRight_(accumulated, of_(fn(value, key), value, accumulated));
    }, empty(functor), functor);
  };
  var mapKeysWithValueKey = curry2(mapKeysWithValueKey_);

  var mapKeys_ = function mapKeys_(fn, functor) {
      return mapKeysWithValueKey(function (v, key) {
          return fn(key);
      })(functor);
  };
  var index$w = curry2(mapKeys_);

  var min_ = function min_(a, b) {
    return head([].concat(toConsumableArray(toArray$1(a)), toConsumableArray(toArray$1(b))).sort(function (a, b) {
      return a < b;
    }));
  };
  var index$x = curry2(min_);

  var mergeLeft_ = function mergeLeft_(left, right) {
    if (type(left) !== type(right)) {
      throw new Error("mergeLeft received a " + type(left) + " and " + type(right) + " which aren't the same");
    }
    switch (type(left)) {
      case "Array":
        {
          return [].concat(toConsumableArray(right), toConsumableArray(left));
        }
      case "Object":
        {
          return _extends({}, right, left);
        }
      case "Map":
        {
          return new Map([].concat(toConsumableArray(right), toConsumableArray(left)));
        }
      case "Set":
        {
          return new Set([].concat(toConsumableArray(right), toConsumableArray(left)));
        }
      case "String":
        {
          return "" + right + left;
        }
      default:
        {
          throw new Error("mergeLeft doesn't know how to deal with " + type(left));
        }
    }
  };
  var mergeLeft = curry2(mergeLeft_);

  var mergeWith_ = function mergeWith_(fn, initial, functor) {
    return reduceWithValueKey_(function (acc, value, key) {
      if (prop_(key, acc)) {
        return attach_(key, fn(prop_(key, acc), value), acc);
      }
      return attach_(key, value, acc);
    }, initial, functor);
  };
  var mergeWith = curry3(mergeWith_);

  var mergeDeepLeft = curry2(function (left, right) {
    if (isArray(left) && isArray(right)) {
      return mergeLeft(left)(right);
    }
    if (isObject(left) && isObject(right)) {
      return mergeWith(mergeDeepLeft)(left)(right);
    }
    return left;
  });

  var index$y = (function (functors) {
    if (head(functors)) {
      return reduceValues(mergeDeepLeft)(empty(head(functors)))(functors);
    }
    return functors;
  });

  var mergeDeepRight_ = function mergeDeepRight_(left, right) {
    if (isArray(left) && isArray(right)) {
      return mergeRight_(left, right);
    }
    if (isObject(left) && isObject(right)) {
      return mergeWith_(mergeDeepRight_, left, right);
    }
    return right;
  };
  var mergeDeepRight = curry2(mergeDeepRight_);

  var last$1 = nth(-1);
  var index$z = (function (functors) {
    if (last$1(functors)) {
      return reduceValues(mergeDeepRight)(empty(last$1(functors)))(functors);
    }
    return functors;
  });

  var index$A = (function (functors) {
    if (head(functors)) {
      return reduceValues_(mergeLeft, empty(head(functors)), functors);
    }
    return functors;
  });

  var index$B = (function (functors) {
    if (last(functors)) {
      return reduceValues_(mergeRight_, empty(last(functors)), functors);
    }
    return functors;
  });

  var mergeWithKey_ = function mergeWithKey_(fn, initial, functor) {
    return reduceWithValueKey_(function (accumulated, value, key) {
      if (accumulated[key]) {
        return _extends({}, accumulated, defineProperty({}, key, fn(accumulated[key], value, key)));
      }
      return attach_(key, value, accumulated);
    }, initial, functor);
  };
  var index$C = curry3(mergeWithKey_);

  var min_$1 = function min_(a, b) {
    return head([].concat(toConsumableArray(toArray$1(a)), toConsumableArray(toArray$1(b))).sort(function (a, b) {
      return a > b;
    }));
  };
  var index$D = curry2(min_$1);

  var multiply_ = function multiply_(a, b) {
    return a * b;
  };
  var index$E = curry2(multiply_);

  var index$F = (function (x) {
    return !x;
  });

  var prepend_ = function prepend_(value, orderedList) {
    switch (type(orderedList)) {
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
          throw new Error("prepend doesn't know how to deal with " + type(orderedList));
        }
    }
  };
  var index$G = curry2(prepend_);

  var reverse$1 = (function (orderedList) {
    return reduceValues_(function (acc, v) {
      return prepend_(v, acc);
    }, empty(orderedList), orderedList);
  });

  var objectFrom_ = function objectFrom_(keychain, value) {
    return reduceValues_(function (accumulated, key) {
      return attach_(key, accumulated, {});
    }, value, reverse$1(toArray$1(keychain)));
  };
  var index$H = curry2(objectFrom_);

  var objOf_ = function objOf_(keychain, value) {
    return reduceValues_(function (accumulated, key) {
      return attach_(key, accumulated, {});
    }, value, reverse$1(toArray$1(keychain)));
  };
  var index$I = curry2(objOf_);

  var or_ = function or_(a, b) {
    return a || b;
  };
  var index$J = curry2(or_);

  var index$K = (function (pairs) {
    return mapValues(head)(pairs);
  });

  var index$L = (function (pairs) {
    return mapValues_(last, pairs);
  });

  var pathOr_ = function pathOr_(d, p, obj) {
    return defaultTo_(d, path_(p, obj));
  };
  var index$M = curry3(pathOr_);

  var pick = function pick(keys, keyedEnumerable) {
    return reduceValues_(function (accumulated, key) {
      var v = prop_(key, keyedEnumerable);
      return v ? mergeRight_(accumulated, objOf_(key, v)) : accumulated;
    }, empty(keyedEnumerable), keys);
  };
  var index$N = curry2(pick);

  var pickAll_ = function pickAll_(keys, keyedEnumerable) {
    return reduceValues_(function (accumulated, key) {
      return mergeRight_(accumulated, objOf_(key, prop_(key, keyedEnumerable)));
    }, empty(keyedEnumerable), keys);
  };
  var index$O = curry2(pickAll_);

  var plucks_ = function plucks_(keychains, functor) {
    return mapValues_(juxt(mapValues_(path, keychains)), functor);
  };
  var index$P = curry2(plucks_);

  var props_ = function props_(keys, obj) {
    if (typeof keys === "string") {
      keys = keys.trim().split(",");
    }
    if (!Array.isArray(keys)) return [];
    var length = keys.length;
    var result = Array(length);
    for (var i = 0; i < length; i++) {
      result[i] = obj[keys[i]];
    }
    return result;
  };
  var index$Q = curry2(props_);

  var index$R = curry3(function (reducer, initial, functor) {
    return reduceWithValueKey_(reducer, initial, functor, true);
  });

  var reduceWhile_ = function reduceWhile_(pred, fn, init, list) {
    var res = init;
    var copy = [].concat(list);
    while (copy.length && pred(res, copy[0])) {
      res = fn(res, copy.shift());
    }return res;
  };
  var index$S = curry4(reduceWhile_);

  var round_ = function round_(precision, num) {
    return Number(Math.round(num + 'e' + precision) + 'e-' + precision);
  };
  var index$T = curry2(round_);

  var split$1 = function split(separator, str) {
    return str.split(separator);
  };
  var index$U = curry2(split$1);

  var isRegex = function isRegex(x) {
    return Object.prototype.toString.call(x) === "[object RegExp]";
  };
  var cloneRegExp = function cloneRegExp(pattern) {
    return new RegExp(pattern.source, (pattern.global ? "g" : "") + (pattern.ignoreCase ? "i" : "") + (pattern.multiline ? "m" : "") + (pattern.sticky ? "y" : "") + (pattern.unicode ? "u" : ""));
  };
  var test_ = function test_(pattern, str) {
    if (!isRegex(pattern)) {
      throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + toString(pattern));
    }
    return cloneRegExp(pattern).test(str);
  };
  var test = curry2(test_);

  var escapeString = function escapeString(str) {
    if (typeof str !== "string") {
      throw new TypeError("Expected a string");
    }
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  };
  var startsWith_ = function startsWith_(subset, set) {
    return test(new RegExp("^" + escapeString(subset)))(set);
  };
  var index$V = curry2(startsWith_);

  var index$W = always(true);

  var index$X = (function (x) {
    return dropFirst_(1, x);
  });

  var index$Y = (function (str) {
    return str.toLowerCase();
  });

  var unless_ = function unless_(cond, fn, val) {
    return cond(val) ? val : fn(val);
  };
  var index$Z = curry3(unless_);

  var index$$ = (function (functor) {
    return reduceValues(flip(append))([])(functor);
  });

  var when_ = function when_(condition, whenTrueFn) {
    if (whenTrueFn === undefined) {
      return function (whenTrueFnHolder) {
        return when_(condition, whenTrueFnHolder);
      };
    }
    return function (input) {
      var flag = typeof condition === "boolean" ? condition : condition(input);
      if (flag) {
        return whenTrueFn(input);
      }
      return input;
    };
  };
  var index$_ = curry2(when_);

  var where_ = function where_(matcher, keyedEnumerable) {
    return reduceWithValueKey_(function (latest, value, key) {
      return latest && value(path_(toArray$1(key), keyedEnumerable));
    }, true, matcher);
  };
  var index$10 = curry2(where_);

  exports.always = always;
  exports.anyPass = index;
  exports.append = append;
  exports.applyTo = index$1;
  exports.attach = index$2;
  exports.both = index$3;
  exports.compact = index$7;
  exports.complement = index$8;
  exports.compose = index$9;
  exports.concat = index$a;
  exports.converge = converge$1;
  exports.curry = curry;
  exports.curryN = curryN$1;
  exports.dec = index$g;
  exports.defaultTo = index$h;
  exports.divide = index$i;
  exports.dropFirst = index$k;
  exports.either = index$l;
  exports.empty = empty;
  exports.equals = index$m;
  exports.F = index$n;
  exports.filter = index$5;
  exports.flip = flip;
  exports.flow = index$o;
  exports.fnOrError = fnOrError;
  exports.forEach = index$p;
  exports.fromIteratorToArray = fromIteratorToArray;
  exports.gt = index$j;
  exports.head = head;
  exports.identity = index$q;
  exports.ifElse = index$r;
  exports.is = is;
  exports.isArray = isArray;
  exports.isDefined = index$s;
  exports.isEmpty = index$t;
  exports.isNil = isNil;
  exports.isObject = isObject;
  exports.juxt = juxt;
  exports.keys = index$v;
  exports.last = last;
  exports.mapKeys = index$w;
  exports.mapKeysWithValueKey = mapKeysWithValueKey;
  exports.mapValues = mapValues;
  exports.mapValuesWithValueKey = index$e;
  exports.max = index$x;
  exports.mergeAllDeepLeft = index$y;
  exports.mergeAllDeepRight = index$z;
  exports.mergeAllLeft = index$A;
  exports.mergeAllRight = index$B;
  exports.mergeDeepLeft = mergeDeepLeft;
  exports.mergeDeepRight = mergeDeepRight;
  exports.mergeLeft = mergeLeft;
  exports.mergeRight = index$c;
  exports.mergeWith = mergeWith;
  exports.mergeWithKey = index$C;
  exports.min = index$D;
  exports.multiply = index$E;
  exports.not = index$F;
  exports.nth = nth;
  exports.objectFrom = index$H;
  exports.objOf = index$I;
  exports.of = index$d;
  exports.or = index$J;
  exports.pairsKeys = index$K;
  exports.pairValues = index$L;
  exports.path = path;
  exports.pathOr = index$M;
  exports.pick = index$N;
  exports.pickAll = index$O;
  exports.pipe = pipe;
  exports.pluck = index$f;
  exports.plucks = index$P;
  exports.prepend = index$G;
  exports.prop = index$b;
  exports.props = index$Q;
  exports.reduceKeys = index$u;
  exports.reduceRight = index$R;
  exports.reduceValues = reduceValues;
  exports.reduceWhile = index$S;
  exports.reduceWithValueKey = index$4;
  exports.reject = index$6;
  exports.replace = replace;
  exports.reverse = reverse$1;
  exports.round = index$T;
  exports.split = index$U;
  exports.startsWith = index$V;
  exports.T = index$W;
  exports.tail = index$X;
  exports.test = test;
  exports.toArray = toArray$1;
  exports.toLower = index$Y;
  exports.toPairs = toPairs;
  exports.toString = toString$2;
  exports.type = type;
  exports.unless = index$Z;
  exports.values = index$$;
  exports.when = index$_;
  exports.where = index$10;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
