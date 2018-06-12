(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.futils = {})));
}(this, (function (exports) { 'use strict';

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

  var takesOne = function takesOne(name) {
    return function (arg, f) {
      return f[name](arg);
    };
  };
  var takesN = function takesN(name) {
    return function (f) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return f[name].apply(f, args);
    };
  };
  var split = takesOne("split");
  var length = function length(x) {
    return x.length;
  };
  var concat = takesN("concat");
  var apply = function apply(fn, args) {
    return fn.apply(null, args);
  };

  var notFnErrPrefix = "`fn` in `curry(fn, ...args)`";
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
      return !canBeCalled ? apply(curryN, concat([executeArity, fnOrError(notFnErrPrefix, fn)], concatedArgs)) : apply(fnOrError(notFnErrPrefix, fn), concatedArgs);
    };
  };
  var curry = function curry(fn) {
    for (var _len3 = arguments.length, argsToCurry = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      argsToCurry[_key3 - 1] = arguments[_key3];
    }
    return curryN$1.apply(undefined, [fnOrError(notFnErrPrefix, fn).length, fn].concat(argsToCurry));
  };
  var curry2 = function curry2(fn) {
    return curryN$1(2, fn);
  };
  var curry3 = function curry3(fn) {
    return curryN$1(3, fn);
  };
  var curry4 = function curry4(fn) {
    return curryN$1(4, fn);
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
  var index = curry2(applyTo_);

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
  var attach = curry3(attach_);

  var complement_ = function complement_(predicate, anything) {
    return !predicate(anything);
  };
  var index$1 = curry2(complement_);

  var index$2 = (function () {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }
    return fns.reduce(function (f, g) {
      return function () {
        return f(g.apply(undefined, arguments));
      };
    });
  });

  var notFnErrPrefix$1 = "`fn` in `curry(fn, ...args)`";
  var index$3 = (function (executeArity, fn) {
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
  });

  var is = curry(function (sig, value) {
    return sig === "null" ? value === null : sig === "undefined" ? value === undefined : value === undefined || value === null ? false : type(value) === sig;
  });

  function replace(regex, replacer, str) {
    if (replacer === undefined) {
      return function (replacerHolder, strHolder) {
        return replace(regex, replacerHolder, strHolder);
      };
    } else if (str === undefined) {
      return function (strHolder) {
        return replace(regex, replacer, strHolder);
      };
    }
    return str.replace(regex, replacer);
  }

  var isNil = (function (value) {
    return is("undefined")(value) || is("null")(value);
  });

  var _quote = function _quote(s) {
    var escaped = s.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b")
    .replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
    return '"' + escaped.replace(/"/g, '\\"') + '"';
  };
  var toString$1 = (function (value) {
    if (value === null) {
      return "null";
    }
    if (value === undefined) {
      return "undefined";
    }
    if (is("String")(value)) {
      return _quote(value);
    }
    return !isNil(value) && typeof value.toString === "function" ? value.toString() : Object.prototype.toString.apply(value);
  });

  var index$4 = (function (x) {
    if (isNil(x)) {
      return x;
    }
    if (is("String")(x)) {
      var xx = parseInt(x);
      return replace(toString$1(xx), toString$1(xx - 1), x);
    } else {
      return x - 1;
    }
  });

  var divide = function divide(a, b) {
    return a / b;
  };
  var index$5 = curry2(divide);

  var gt_ = function gt_(a, b) {
    return a > b;
  };
  var greaterThan = curry2(gt_);

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

  var fromMapping = {
    Array: function Array(array) {
      return array.reduce(function (pairs, value, index) {
        return [].concat(toConsumableArray(pairs), [[index, value]]);
      }, []);
    },
    Object: function (_Object) {
      function Object(_x) {
        return _Object.apply(this, arguments);
      }
      Object.toString = function () {
        return _Object.toString();
      };
      return Object;
    }(function (object) {
      return Object.entries(object);
    }),
    Set: function Set(set$$1) {
      return fromIteratorToArray(set$$1.values()).map(function (value) {
        return [undefined, value];
      });
    },
    Map: function Map(map) {
      return fromIteratorToArray(map.entries());
    }
  };
  var toPairs = (function (pairableValue) {
    if (fromMapping[type(pairableValue)]) {
      return fromMapping[type(pairableValue)](pairableValue);
    }
    throw new Error("fromFunctorToPairs doesn't know how to handle " + type(pairableValue));
  });

  var reduceWithValueKey_ = function reduceWithValueKey_(reducer, initial, functor) {
    switch (type(functor)) {
      case "Array":
        {
          return functor.reduce(function (acc, value, key) {
            return reducer(acc)(value)(key);
          }, initial);
        }
      case "Object":
        {
          return toPairs(functor).reduce(function (acc, _ref) {
            var _ref2 = slicedToArray(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];
            return reducer(acc)(value)(key);
          }, initial);
        }
      case "Set":
        {
          return toPairs(functor).reduce(function (acc, _ref3) {
            var _ref4 = slicedToArray(_ref3, 2),
                value = _ref4[1];
            return reducer(acc)(value)();
          }, initial);
        }
      case "Map":
        {
          return toPairs(functor).reduce(function (acc, _ref5) {
            var _ref6 = slicedToArray(_ref5, 2),
                key = _ref6[0],
                value = _ref6[1];
            return reducer(acc)(value)(key);
          }, initial);
        }
      case "String":
        {
          return toPairs(functor.split("")).reduce(function (acc, _ref7) {
            var _ref8 = slicedToArray(_ref7, 2),
                key = _ref8[0],
                value = _ref8[1];
            return reducer(acc)(value)(key);
          }, initial);
        }
      default:
        {
          throw new Error("reduceWithValueKey couldn't figure out how to reduce " + type(functor));
        }
    }
  };
  var reduceWithValueKey = curry3(reduceWithValueKey_);

  var toString$2 = Object.prototype.toString;
  function _has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  var _isArguments = function () {
    return toString$2.call(arguments) === "[object Arguments]" ? function _isArguments(x) {
      return toString$2.call(x) === "[object Arguments]";
    } : function _isArguments(x) {
      return _has("callee", x);
    };
  }();
  var fresh = (function (x) {
    return x != null && typeof x.empty === "function" ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === "function" ? x.constructor.empty() : is("Array")(x) ? [] : is("String")(x) ? "" : is("Object")(x) ? {} : is("Map")(x) ? new Map() : is("Set")(x) ? new Set() : _isArguments(x) ? function () {
      return arguments;
    }() :
    void 0;
  });

  var dropFirst_ = function dropFirst_(count, orderedList) {
    return reduceWithValueKey(function (accumulated) {
      return function (value) {
        return function (index) {
          if (greaterThan(index)(count - 1)) {
            return append(value)(accumulated);
          }
          return accumulated;
        };
      };
    })(fresh(orderedList))(orderedList);
  };
  var index$6 = curry2(dropFirst_);

  var filter_ = function filter_(predicate, enumerable) {
    if (enumerable.filter) {
      return enumerable.filter(predicate);
    }
    return reduceWithValueKey(function (accumulated) {
      return function (value) {
        return function (key) {
          if (predicate(value)) {
            return attach(key)(value)(accumulated);
          }
          return accumulated;
        };
      };
    })(fresh(enumerable))(enumerable);
  };
  var filter$1 = curry2(filter_);

  var flip = curry(function (fn, left, right) {
    return fn(right)(left);
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

  var index$7 = (function (value) {
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
  var index$8 = curry2(forEach_);

  var nth_ = function nth_(offset, list) {
    var idx = offset < 0 ? list.length + offset : offset;
    return is("String")(list) ? list.charAt(idx) : list[idx];
  };
  var nth = curry2(nth_);

  var head = nth(0);

  var index$9 = (function (a) {
    return a;
  });

  var ifElse_ = function ifElse_(predicate, consequent, alternative, value) {
    predicate(value) ? consequent(value) : alternative(value);
  };
  var index$a = curry4(ifElse_);

  var isArray = (function (value) {
    return is("Array")(value);
  });

  var index$b = (function (value) {
    return !(value === undefined || value === null);
  });

  var index$c = (function (x) {
    return x != null && x === fresh(x);
  });

  var isObject = (function (value) {
    return is("Object")(value);
  });

  var fetchKey = curry(function (name, keyedFunctor) {
    if (isNil(keyedFunctor)) {
      return keyedFunctor;
    }
    if (keyedFunctor.get) {
      return keyedFunctor.get(name);
    }
    return keyedFunctor[name];
  });

  var reduceKeys = (function (fn) {
    return reduceWithValueKey(function (acc) {
      return function () {
        return function (key) {
          return fn(acc)(key);
        };
      };
    });
  });

  var index$d = (function (keyedEnumerable) {
    return reduceKeys(flip(append))([])(keyedEnumerable);
  });

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
  var mergeRight = curry2(mergeRight_);

  var of = curry(function (key, value, functor) {
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
  });

  var mapKeysWithValueKey_ = function mapKeysWithValueKey_(fn, functor) {
    return reduceWithValueKey(function (accumulated) {
      return function (value) {
        return function (key) {
          return mergeRight(accumulated)(of(fn(value, key))(value)(accumulated));
        };
      };
    })(fresh(functor))(functor);
  };
  var mapKeysWithValueKey = curry2(mapKeysWithValueKey_);

  var mapKeys_ = function mapKeys_(fn, functor) {
      return mapKeysWithValueKey(function (v, key) {
          return fn(key);
      })(functor);
  };
  var index$e = curry2(mapKeys_);

  var mapValuesWithValueKey_ = function mapValuesWithValueKey_(fn, functor) {
    if (functor.map instanceof Function) {
      return functor.map(function (value, key) {
        return fn(value, key);
      });
    }
    return reduceWithValueKey(function (accumulated) {
      return function (value) {
        return function (key) {
          return mergeRight(accumulated)(of(key)(fn(value, key))(accumulated));
        };
      };
    })(fresh(functor))(functor);
  };
  var mapValuesWithValueKey = curry2(mapValuesWithValueKey_);

  var mapValues_ = function mapValues_(fn, functor) {
    if (functor.map instanceof Function) {
      return functor.map(function (value) {
        return fn(value);
      });
    }
    return mapValuesWithValueKey(function (value) {
      return fn(value);
    })(functor);
  };
  var mapValues = curry2(mapValues_);

  var reduceValues = (function (fn) {
    return reduceWithValueKey(function (acc) {
      return function (value) {
        return function () {
          return fn(acc)(value);
        };
      };
    });
  });

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

  var mergeWith = (function (fn) {
    return reduceWithValueKey(function (accumulated) {
      return function (value) {
        return function (key) {
          if (fetchKey(key)(accumulated)) {
            return attach(key)(fn(fetchKey(key)(accumulated))(value))(accumulated);
          }
          return attach(key)(value)(accumulated);
        };
      };
    });
  });

  var mergeDeepLeft = curry2(function (left, right) {
    if (isArray(left) && isArray(right)) {
      return mergeLeft(left)(right);
    }
    if (isObject(left) && isObject(right)) {
      return mergeWith(mergeDeepLeft)(left)(right);
    }
    return left;
  });

  var index$f = (function (functors) {
    if (head(functors)) {
      return reduceValues(mergeDeepLeft)(fresh(head(functors)))(functors);
    }
    return functors;
  });

  var mergeDeepRight = curry2(function (left, right) {
    if (isArray(left) && isArray(right)) {
      return mergeRight(left)(right);
    }
    if (isObject(left) && isObject(right)) {
      return mergeWith(mergeDeepRight)(left)(right);
    }
    return right;
  });

  var last = nth(-1);
  var index$g = (function (functors) {
    if (last(functors)) {
      return reduceValues(mergeDeepRight)(fresh(last(functors)))(functors);
    }
    return functors;
  });

  function mergeAllLeft(functors) {
    if (head(functors)) {
      return reduceValues(mergeLeft)(fresh(head(functors)))(functors);
    }
    return functors;
  }

  var last$1 = nth(-1);
  var index$h = (function (functors) {
    if (last$1(functors)) {
      return reduceValues(mergeRight)(fresh(last$1(functors)))(functors);
    }
    return functors;
  });

  var index$i = (function (fn) {
    return reduceWithValueKey(function (accumulated) {
      return function (value) {
        return function (key) {
          if (accumulated[key]) {
            return _extends({}, accumulated, defineProperty({}, key, fn(accumulated[key])(value)(key)));
          }
          return attach(key)(value)(accumulated);
        };
      };
    });
  });

  var index$j = (function (x) {
    return head(x.sort(function (a, b) {
      return a > b;
    }));
  });

  var multiply_ = function multiply_(a, b) {
    return a * b;
  };
  var index$k = curry2(multiply_);

  var index$l = (function (x) {
    return !x;
  });

  var prepend = curry(function (value, orderedList) {
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
  });

  var reverse$1 = (function (orderedList) {
    return reduceValues(flip(prepend))(fresh(orderedList))(orderedList);
  });

  var objectFrom = curry(function (keychain, value) {
    return reduceValues(function (accumulated) {
      return function (key) {
        return attach(key)(accumulated)({});
      };
    })(value)(reverse$1(keychain));
  });

  var or_ = function or_(a, b) {
    return a || b;
  };
  var index$m = curry2(or_);

  var index$n = (function (pairs) {
    return mapValues(head)(pairs);
  });

  var last$2 = nth(-1);
  var index$o = (function (pairs) {
    return mapValues(last$2)(pairs);
  });

  var prop_ = function prop_(name, keyedFunctor) {
    if (isNil(keyedFunctor)) {
      return keyedFunctor;
    }
    if (keyedFunctor.get) {
      return keyedFunctor.get(name);
    }
    return keyedFunctor[name];
  };
  var get$1 = curry2(prop_);

  var path = curry(function (keychain, tree) {
    return reduceValues(flip(get$1))(tree)(keychain);
  });

  var pick = function pick(keys, keyedEnumerable) {
    return reduceValues(function (accumulated) {
      return function (key) {
        var v = get$1(key)(keyedEnumerable);
        return v ? mergeRight(accumulated)(objectFrom([key])(v)) : accumulated;
      };
    })(fresh(keyedEnumerable))(keys);
  };
  var index$p = curry2(pick);

  var pickAll_ = function pickAll_(keys, keyedEnumerable) {
    return reduceValues(function (accumulated) {
      return function (key) {
        return mergeRight(accumulated)(objectFrom([key])(get$1(key)(keyedEnumerable)));
      };
    })(fresh(keyedEnumerable))(keys);
  };
  var index$q = curry2(pickAll_);

  var toArray$1 = (function (value) {
    if (is("Array")(value)) {
      return value;
    }
    return [value];
  });

  var index$r = curry2(function (keychain, functor) {
    return mapValues(path(toArray$1(keychain)))(functor);
  });

  var index$s = (function (a) {
    return a;
  });

  var reject_ = function reject_(fn, list) {
    return filter$1(function (v) {
      return !fn(v);
    }, list);
  };
  var index$t = curry2(reject_);

  var round_ = function round_(precision, num) {
    return Number(Math.round(num + 'e' + precision) + 'e-' + precision);
  };
  var index$u = curry2(round_);

  var index$v = curry(split);

  var isRegex = function isRegex(x) {
    return Object.prototype.toString.call(x) === "[object RegExp]";
  };
  var cloneRegExp = function cloneRegExp(pattern) {
    return new RegExp(pattern.source, (pattern.global ? "g" : "") + (pattern.ignoreCase ? "i" : "") + (pattern.multiline ? "m" : "") + (pattern.sticky ? "y" : "") + (pattern.unicode ? "u" : ""));
  };
  var test = curry(function (pattern, str) {
    if (!isRegex(pattern)) {
      throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + toString(pattern));
    }
    return cloneRegExp(pattern).test(str);
  });

  var escapeString = function escapeString(str) {
    if (typeof str !== "string") {
      throw new TypeError("Expected a string");
    }
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  };
  var startsWith_ = function startsWith_(subset, set) {
    return test(new RegExp("^" + escapeString(subset)))(set);
  };
  var index$w = curry2(startsWith_);

  var index$x = (function (x) {
    return dropFirst_(1, x);
  });

  var index$y = (function (functor) {
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
  var index$z = curry2(when_);

  var where_ = function where_(matcher, keyedEnumerable) {
    return reduceWithValueKey(function (latest) {
      return function (value) {
        return function (key) {
          return latest && value(path(toArray$1(key))(keyedEnumerable));
        };
      };
    })(true)(matcher);
  };
  var index$A = curry2(where_);

  exports.append = append;
  exports.applyTo = index;
  exports.attach = attach;
  exports.complement = index$1;
  exports.compose = index$2;
  exports.curry = curry;
  exports.curryN = index$3;
  exports.dec = index$4;
  exports.divide = index$5;
  exports.dropFirst = index$6;
  exports.empty = fresh;
  exports.filter = filter$1;
  exports.flip = flip;
  exports.flow = index$7;
  exports.fnOrError = fnOrError;
  exports.forEach = index$8;
  exports.fromIteratorToArray = fromIteratorToArray;
  exports.gt = greaterThan;
  exports.head = head;
  exports.identity = index$9;
  exports.ifElse = index$a;
  exports.is = is;
  exports.isArray = isArray;
  exports.isDefined = index$b;
  exports.isEmpty = index$c;
  exports.isNil = isNil;
  exports.isObject = isObject;
  exports.key = fetchKey;
  exports.keys = index$d;
  exports.mapKeys = index$e;
  exports.mapKeysWithValueKey = mapKeysWithValueKey;
  exports.mapValues = mapValues;
  exports.mapValuesWithValueKey = mapValuesWithValueKey;
  exports.mergeAllDeepLeft = index$f;
  exports.mergeAllDeepRight = index$g;
  exports.mergeAllLeft = mergeAllLeft;
  exports.mergeAllRight = index$h;
  exports.mergeDeepLeft = mergeDeepLeft;
  exports.mergeDeepRight = mergeDeepRight;
  exports.mergeLeft = mergeLeft;
  exports.mergeRight = mergeRight;
  exports.mergeWith = mergeWith;
  exports.mergeWithKey = index$i;
  exports.min = index$j;
  exports.multiply = index$k;
  exports.not = index$l;
  exports.nth = nth;
  exports.objectFrom = objectFrom;
  exports.of = of;
  exports.or = index$m;
  exports.pairsKeys = index$n;
  exports.pairValues = index$o;
  exports.path = path;
  exports.pick = index$p;
  exports.pickAll = index$q;
  exports.pipe = pipe;
  exports.pluck = index$r;
  exports.plucks = index$s;
  exports.prepend = prepend;
  exports.prop = get$1;
  exports.reduceKeys = reduceKeys;
  exports.reduceValues = reduceValues;
  exports.reduceWithValueKey = reduceWithValueKey;
  exports.reject = index$t;
  exports.replace = replace;
  exports.reverse = reverse$1;
  exports.round = index$u;
  exports.split = index$v;
  exports.startsWith = index$w;
  exports.tail = index$x;
  exports.test = test;
  exports.toArray = toArray$1;
  exports.toPairs = toPairs;
  exports.toString = toString$1;
  exports.type = type;
  exports.values = index$y;
  exports.when = index$z;
  exports.where = index$A;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
