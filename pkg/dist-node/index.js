'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var typedIs = require('typed-is');
var isFunction = require('typed-is/lib/isFunction');
var isNil = require('typed-is/lib/isNil');
var isString = require('typed-is/lib/isString');
var isBoolean = _interopDefault(require('typed-is/lib/isBoolean'));
var isInteger = require('typed-is/lib/isInteger');
var isPlainObject = require('typed-is/lib/isPlainObject');
var isEmpty = require('typed-is/lib/isEmpty');
var isEmpty__default = _interopDefault(isEmpty);
var isArray = require('typed-is/lib/isArray');
var isFalse = require('typed-is/lib/isFalse');
var isNumber = require('typed-is/lib/isNumber');
var isTrue = require('typed-is/lib/isTrue');

/* eslint no-unused-vars: 0, prefer-rest-params: 0 */
function _setArity(arity, fn) {
  switch (arity) {
    case 0:
      return function arity0() {
        return fn(...arguments);
      };

    case 1:
      return function arity1(a) {
        return fn(...arguments);
      };

    case 2:
      return function arity2(a, b) {
        return fn(...arguments);
      };

    case 3:
      return function arity3(a, b, c) {
        return fn(...arguments);
      };

    case 4:
      return function arity4(a, b, c, d) {
        return fn(...arguments);
      };

    case 5:
      return function arity5(a, b, c, d, e) {
        return fn(...arguments);
      };

    case 6:
      return function arity6(a, b, c, d, e, f) {
        return fn(...arguments);
      };

    case 7:
      return function arity7(a, b, c, d, e, f, g) {
        return fn(...arguments);
      };

    case 8:
      return function arity8(a, b, c, d, e, f, g, h) {
        return fn(...arguments);
      };

    case 9:
      return function arity9(a, b, c, d, e, f, g, h, i) {
        return fn(...arguments);
      };

    default:
      return fn;
  }
}

function withArity(operation, arity, args) {
  const name = operation.name || '';
  const curried = _setArity(arity, internalCurry.bind(null, operation, arity, args));
  Object.defineProperty(curried, 'name', {
    value: name,
    configurable: true
  });
  return curried;
}

const internalCurry = (operation, arity, prevArgs, ...nextArgs) => {
  const left = arity - nextArgs.length;
  const args = prevArgs.concat(nextArgs);

  if (left <= 0) {
    return operation(...args);
  }

  return withArity(operation, left, args);
};

function curryN_(arity, operation) {
  return withArity(operation, arity, []);
}
const curryN = curryN_;

const curry2_ = fn => curryN_(2, fn);

const nth_ = (i, orderedList) => {
  const idx = i < 0 ? orderedList.length + i : i;

  if (typedIs.isString(orderedList)) {
    return orderedList.charAt(idx);
  }

  return orderedList[idx];
};
const nth = curry2_(nth_);

const last_ = list => nth_(-1, list);
const last = last_;

const addIndex_ = iterFn => curryN_(iterFn.length, (fn, ...rest) => {
  let idx = 0;

  const newFn = (...args) => fn(...args, idx++, last_(rest));

  return iterFn(newFn, ...rest);
});
const addIndex = addIndex_;

const toPairs_ = value => {
  if (isNil.isNil(value)) {
    return []; //as ToPairs_<T>;
    // throw new Error(`toPairs doesn't know how to handle ${type_(value)}`)
  }

  if (isString.isString(value)) {
    return toPairs_([...value]); //as ToPairs_<T>;
  }

  if (isFunction.isFunction(value['entries'])) {
    return [...value.entries()]; //as ToPairs_<T>;
  }

  return Object.entries(value); //as ToPairs_<T>;
};
const toPairs = toPairs_;

const pairWrapper = fn => (acc, [key, value], idx) => fn(acc, value, key, idx);

const reduceWhile_ = (pred, reducer, initial, functor) => {
  if (typedIs.isNil(functor)) {
    return initial;
  }

  if (Array.isArray(functor)) {
    const length = functor.length;
    let b = initial;

    for (let i = 0; i < length; ++i) {
      const a = functor[i];
      if (!pred(b, a, i)) break;
      b = reducer(b, a, i);
    }

    return b;
  } else {
    return reduceWhile_(pairWrapper(pred), pairWrapper(reducer), initial, toPairs_(functor));
  }
};
const reduceWhile = curryN_(4, reduceWhile_);

const all_ = (fn, functor) => reduceWhile_(acc => acc === true, (acc, value, key) => fn(value, key), true, functor);
const all = curry2_(all_);

const toArray_ = v => typedIs.isNil(v) ? [] : typedIs.isArray(v) ? v : [v];
const toArray = toArray_;

const first_ = list => nth_(0, list);
const first = first_;

const max_ = (a, b) => first_([...toArray_(a), ...toArray_(b)].sort((a, b) => a < b ? 1 : 0));
const max = curry2_(max_);

const isNil_ = isNil.isNil;

const prop_ = (name, keyedFunctor) => {
  if (isNil.isNil(keyedFunctor)) {
    return keyedFunctor;
  }

  if (keyedFunctor.get) {
    return keyedFunctor.get(name);
  }

  return keyedFunctor[name];
}; // export interface Prop {
//   prop<P extends keyof T, T>(p: P, obj: T): T[P]
//   prop<P extends string>(p: P): <T>(obj: Record<P, T>) => T
//   prop<P extends string, T>(p: P): (obj: Record<P, T>) => T
// }
// export function prop(name: any, keyedFunctor: any): any
// export function prop(name: any): (keyedFunctor: any) => any
// export function prop() {
//   return curry2_(prop_)(arguments)
// }

const prop = curry2_(prop_);

const curry3_ = fn => curryN_(3, fn);

const reduceRight = (arr, reducer, initial) => {
  let idx = arr.length - 1;

  while (idx >= 0) {
    initial = reducer(arr[idx], initial);
    idx -= 1;
  }

  return initial;
};

const reduce_ = (reducer, initial, functor, right = false) => {
  if (typedIs.isNil(functor)) {
    return initial;
  }

  if (Array.isArray(functor)) {
    return !right ? functor.reduce(reducer, initial) : reduceRight(functor, reducer, initial);
  } else {
    return reduce_((acc, [key, value]) => reducer(acc, value, key), initial, toPairs_(functor));
  }
};
const reduce = curry3_((reducer, initial, functor) => reduce_(reducer, initial, functor, false));

const reduceValues_ = (fn, initial, functor) => reduce_((acc, value) => fn(acc, value), initial, functor);
const reduceValues = curry3_(reduceValues_);

const split_ = (separator, str) => str.split(separator);
const split = curry2_(split_);

const splitWhenNoSpace_ = (keys, delim) => typedIs.isString(keys) ? /\s/g.test(keys) ? [keys] : split_(delim, keys) : toArray_(keys);

const path_ = (keys, tree) => {
  if (tree) {
    if (typedIs.isString(keys) && tree[keys]) return tree[keys];
    return reduceValues_((acc, val) => prop_(val, acc), tree, splitWhenNoSpace_(keys, '.'));
  }
};
const path = curry2_(path_);

const type_ = value => value === null ? 'null' : value === undefined ? 'undefined' : Object.prototype.toString.call(value).slice(8, -1);
const type = type_;

const merge_ = (left, right) => {
  if (typedIs.isNil(left)) return right;
  if (typedIs.isNil(right)) return left;

  if (type(left) !== type(right)) {
    throw new Error(`merge received a ${type(left)} and ${type(right)} which aren't the same`);
  }

  switch (type(left)) {
    case 'Array':
      {
        return [...left, ...right];
      }

    case 'Object':
      {
        return Object.assign({}, left, right);
      }

    case 'Map':
      {
        return new Map([...left, ...right]);
      }

    case 'Set':
      {
        return new Set([...left, ...right]);
      }

    case 'String':
      {
        return `${left}${right}`;
      }

    default:
      {
        throw new Error(`merge doesn't know how to deal with ${type(left)}`);
      }
  }
};
const merge = curry2_(merge_);
curry2_(merge_);

const empty_ = value => {
  const t = type_(value);

  switch (t) {
    case 'null':
      {
        return null;
      }

    case 'undefined':
      {
        return undefined;
      }

    case 'String':
      {
        return '';
      }

    case 'Array':
      {
        return [];
      }

    case 'Object':
      {
        return {};
      }

    case 'Map':
      {
        return new Map();
      }

    case 'Set':
      {
        return new Set();
      }

    default:
      {
        return typeof value.empty === 'function' ? value.empty() : value.constructor != null && typeof value.constructor.empty === 'function' ? value.constructor.empty() : null; // throw new Error(`empty doesn't know how to handle ${t}`)
      }
  }
};
const empty = empty_;

const of_ = (key, value, functor) => {
  switch (type_(functor)) {
    case 'Array':
      {
        return [value];
      }

    case 'Object':
      {
        return {
          [key]: value
        };
      }

    case 'Set':
      {
        return new Set([value]);
      }

    case 'Map':
      {
        return new Map([[key, value]]);
      }

    case 'String':
      {
        return `${value}`;
      }

    default:
      {
        throw new Error(`of doesn't know how to type ${type_(functor)}`);
      }
  }
};
const of = curry3_(of_);

const map_ = (fn, functor) => {
  if (functor.map instanceof Function) {
    return functor.map((value, key) => fn(value, key));
  }

  return reduce_((accumulated, value, key) => merge_(accumulated, of_(key, fn(value, key), accumulated)), empty_(functor), functor);
};
const map = curry2_(map_);

const isFunction_ = isFunction.isFunction;

const mapValues_ = (fn, functor) => {
  if (isFunction.isFunction(functor)) {
    return curryN_(functor.length, (...args) => fn(functor(...args)));
  }

  if (functor.map instanceof Function) {
    return functor.map(value => fn(value));
  }

  return map_(value => fn(value), functor);
};
const mapValues = curryN_(2, mapValues_);

const pluck_ = (p, obj) => mapValues_(x => path_(p, x), obj);
const pluck = curry2_(pluck_);

const maxArgs_ = fns => max_(0, pluck_('length', fns));

const allPass_ = (fns, ...args) => reduceWhile_(acc => acc === true, (acc, fn) => fn(...args), true, toArray(fns));
const allPass = fns => curryN_(maxArgs_(fns), (...args) => allPass_(fns, ...args));

const always_ = x => (...args) => x;
const always = always_;

const any_ = (handlerFn, functor) => reduceWhile_(acc => acc === false, (acc, value, key) => handlerFn(value, key), false, functor);
const any = curry2_(any_);

const anyPass_ = (fns, ...args) => reduceWhile_(acc => acc === false, (acc, fn) => fn(...args), false, toArray(fns));
const anyPass = curry2_(anyPass_);

// from https://github.com/remeda/remeda/blob/master/src/purry.ts

/**
 * Creates a function with `data-first` and `data-last` signatures.
 *
 * `purry` is a dynamic function and it's not type safe. It should be wrapped by a function that have proper typings.
 * Refer to the example below for correct usage.
 *
 * @param fn the function to purry.
 * @param args the arguments
 * @signature F.purry(fn, arguments);
 * @example-raw
 *    function _findIndex(array, fn) {
 *      for (let i = 0; i < array.length; i++) {
 *        if (fn(array[i])) {
 *          return i;
 *        }
 *      }
 *      return -1;
 *    }
 *
 *    // data-first
 *    function findIndex<T>(array: T[], fn: (item: T) => boolean): number;
 *
 *    // data-last
 *    function findIndex<T>(fn: (item: T) => boolean): (array: T[]) => number;
 *
 *    function findIndex() {
 *      return F.purry(_findIndex, arguments);
 *    }
 * @category Function
 */
function purry(fn, args, lazy) {
  const diff = fn.length - args.length;
  const arrayArgs = Array.from(args);

  if (diff === 0) {
    return fn(...arrayArgs);
  }

  if (diff === 1) {
    const ret = data => fn(data, ...arrayArgs);

    if (lazy || fn.lazy) {
      ret.lazy = lazy || fn.lazy;
      ret.lazyArgs = args;
    }

    return ret;
  }

  throw new Error('Wrong number of arguments');
}

/**
 * Combines two arrays.
 * @param b the second array
 * @signature
 *    F.concat(b)(a);
 * @example
 *    F.concat(['a'])([1, 2, 3]) // [1, 2, 3, 'a']
 * @data_last
 * @category Array
 */

function concat() {
  return purry(concat_, arguments);
}
function concat_(a, b) {
  return a.concat(b);
}

const ap_ = (applyF, applyX) => isFunction.isFunction(applyF) ? x => applyF(x)(applyX(x)) : reduce_((acc, f) => concat_(acc, mapValues_(f, applyX)), [], applyF);
const ap = curry2_(ap_);

const apply_ = (fn, arg) => fn(...arg);
const apply = curry2_(apply_);

const applyTo_ = (value, fn) => fn(value);
const applyTo = curry2_(applyTo_);

const argsToList_ = (...args) => args;
const argsToList = argsToList_;

const assoc_ = (key, value, functor) => {
  switch (type_(functor)) {
    case 'Object':
      {
        return Object.assign({}, functor, {
          [key]: value
        });
      }

    case 'Array':
      {
        return Object.assign([], functor, {
          [key]: value
        });
      }

    case 'String':
      {
        return Object.assign([], functor, {
          [key]: value
        }).join('');
      }

    case 'Map':
      {
        return new Map([...functor, [key, value]]);
      }

    case 'Set':
      {
        return new Set(Object.assign([], [...functor], {
          [key]: value
        }));
      }

    default:
      {
        throw new Error(`attach doesn't know how to set a key and value on ${type_(functor)}`);
      }
  }
};
const assoc = curry3_(assoc_);

const assocPath_ = (path, val, obj) => {
  const empt = empty_(obj);
  path = splitWhenNoSpace_(path, '.');

  if (path.length === 0) {
    return val;
  }

  const inner = ([head, ...tail], x, o) => assoc_(head, tail.length ? inner(tail, x, o[head] || empt) : x, o);

  return inner(path, val, obj);
};
const assocPath = curry3_(assocPath_);

const fromMapping = {
  Object: function (_Object) {
    function Object(_x, _x2, _x3) {
      return _Object.apply(this, arguments);
    }

    Object.toString = function () {
      return _Object.toString();
    };

    return Object;
  }((key, value, functor) => Object.assign({}, functor, {
    [key]: value
  })),
  Array: (key, value, functor) => [...functor.slice(0, key), value, ...functor.slice(key)],
  String: (key, value, functor) => `${functor.slice(0, key)}${value}${functor.slice(key)}`,
  Map: function (_Map) {
    function Map(_x4, _x5, _x6) {
      return _Map.apply(this, arguments);
    }

    Map.toString = function () {
      return _Map.toString();
    };

    return Map;
  }((key, value, functor) => new Map([...functor, [key, value]])),
  Set: function (_Set) {
    function Set(_x7, _x8, _x9) {
      return _Set.apply(this, arguments);
    }

    Set.toString = function () {
      return _Set.toString();
    };

    return Set;
  }((key, value, functor) => new Set([...functor, value]))
};
const attach_ = (key, value, functor) => {
  const type = type_(functor); // eslint-disable-line no-redeclare

  if (fromMapping.hasOwnProperty(type)) {
    return fromMapping[type](key, value, functor);
  }

  throw new Error(`attach doesn't know how to set a key and value on ${type}`);
};
const attach = curry3_(attach_);

const both_ = (f, g) => isFunction.isFunction(f) ? (...args) => f(...args) && g(...args) : f && g;
const both = curry2_(both_);

function call_(fn, ...args) {
  return args.length > 0 ? fn.apply(fn, args) : function (...args2) {
    return fn.apply(fn, args2);
  };
}
const call = call_;

const capitalize_ = (str = '') => `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
const capitalize = capitalize_;

// @flow
const when_ = (condition, whenTrueFn, input) => (isBoolean(condition) ? condition : condition(input)) ? whenTrueFn(input) : input;
const when = curry3_(when_);

const replaceWhen_ = (predicate, replacement, obj) => mapValues_(val => when_(predicate, always_(replacement), val), obj);
const replaceWhen = curry3_(replaceWhen_);

const cascadingPath_ = (paths, tree) => reduceValues_((filler, p) => {
  if (isNil.isNil(filler)) {
    return path_(p, tree);
  }

  return path_(replaceWhen_(isNil.isNil, filler, p), tree);
}, null, paths);
const cascadingPath = curry2_(cascadingPath_);

const cleanWhitespace_ = str => str.replace(/\s{2}/, '').trim();
const cleanWhitespace = cleanWhitespace_;

const filter_ = (predicate, enumerable) => {
  if (enumerable.filter) {
    return enumerable.filter(predicate);
  }

  return reduce_((accumulated, value, key) => predicate(value, key) ? attach_(key, value, accumulated) : accumulated, empty_(enumerable), enumerable);
};
const filter = curry2_(filter_);

const complement_ = pred => curryN_(pred.length, (...args) => !pred(...args));
const complement = complement_;

const reject_ = (predicate, enumerable) => {
  if (enumerable.reject) {
    return enumerable.reject(predicate);
  }

  return filter_(complement_(predicate), enumerable);
};
const reject = curry2_(reject_);

const rejectNil_ = obj => reject_(isNil.isNil, obj);
const rejectNil = rejectNil_;

const compact_ = rejectNil_;
const compact = compact_;

const comparator_ = pred => (a, b) => pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
const comparator = comparator_;

const compose_ = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)), arg => arg);
const compose = compose_;

const has_ = (prop, obj) => Object.prototype.hasOwnProperty.call(obj, prop);
const has = curry2_(has_);

function append_(value, orderedList) {
  switch (type_(orderedList)) {
    case 'Number':
    case 'String':
      {
        return `${orderedList}${value}`;
      }

    case 'Array':
      {
        return [...orderedList, value];
      }

    default:
      {
        throw new TypeError(`append doesn't know how to deal with ${type_(orderedList)}`);
      }
  }
}
const append = curry2_(append_);

const reduceKeys_ = (fn, initial, functor) => reduce_((acc, _, key) => fn(acc, key), initial, functor);
const reduceKeys = curry3_(reduceKeys_);

const keys_ = keyedObj => reduceKeys_((acc, key) => append_(key, acc), [], keyedObj);
const keys = keys_;

const eq = (a, b, aStack = [], bStack = []) => {
  if (a === b) return true;
  if (a == null || b == null) return a === b;
  let result = true;
  const typeA = type_(a);
  const typeB = type_(b);
  if (typeA !== typeB) return false;

  switch (typeA) {
    case 'String':
    case 'Number':
      {
        return a.valueOf() === b.valueOf();
      }

    case 'Boolean':
    case 'Date':
      {
        return +a === +b;
      }

    case 'RegExp':
      {
        return a.toString() === b.toString();
      }

    default:
  }

  if (typeof a !== 'object' || typeof b !== 'object') {
    return false;
  }

  let length = aStack.length;

  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) {
      return bStack[length] === b;
    }
  } // Add the first object to the stack of traversed objects.


  aStack.push(a);
  bStack.push(b);
  let size = 0;

  if (typeA === 'Array') {
    size = a.length;

    if (size !== b.length) {
      return false;
    }

    while (size--) {
      result = eq(a[size], b[size], aStack, bStack);

      if (!result) {
        return false;
      }
    }
  } // Deep compare objects.


  const aKeys = keys_(a);
  let key;
  size = aKeys.length;
  const bKeys = keys_(b);

  if (bKeys.length !== size) {
    return false;
  }

  while (size--) {
    key = aKeys[size]; // Deep compare each member

    result = has_(key, b) && eq(a[key], b[key], aStack, bStack);

    if (!result) {
      return false;
    }
  } // Remove the first object from the stack of traversed objects.


  aStack.pop();
  bStack.pop();
  return result;
};

const equals_ = (a, b) => eq(a, b);
const equals = curry2_(equals_);

const contains_ = (x, arr) => {
  const t = type_(x);

  if (t !== 'Array' && t !== 'Object') {
    return arr.includes(x);
  }

  let index = -1;
  let flag = false;

  while (index < arr.length && !flag) {
    if (equals_(arr[index], x)) {
      flag = true;
    }

    index += 1;
  }

  return flag;
};
const contains = curry2_(contains_);

const internalConverge = (after, fns) => (...args) => after.apply(internalConverge, fns.map(fn => fn.apply(internalConverge, args)));

const converge_ = (after, fns) => curryN_(maxArgs_(fns), internalConverge(after, fns));
const converge = curryN_(2, converge_);

function flow(value, ...operations) {
  let ret = value;
  const lazyOps = operations.map(op => {
    const lazy = op.lazy,
          lazyArgs = op.lazyArgs;

    if (lazy) {
      const fn = lazy(...lazyArgs);
      fn.indexed = lazy.indexed;
      fn.single = lazy.single;
      fn.index = 0;
      fn.items = [];
      return fn;
    }

    return null;
  });
  let opIdx = 0;

  while (opIdx < operations.length) {
    const op = operations[opIdx];
    const lazyOp = lazyOps[opIdx];

    if (!lazyOp) {
      ret = op(ret);
      opIdx++;
      continue;
    }

    const lazySeq = [];

    for (let j = opIdx; j < operations.length; j++) {
      if (lazyOps[j]) {
        lazySeq.push(lazyOps[j]);

        if (lazyOps[j].single) {
          break;
        }
      } else {
        break;
      }
    }

    let acc = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = ret[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        let item = _step.value;

        if (_processItem({
          item,
          acc,
          lazySeq
        })) {
          break;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    const lastLazySeq = lazySeq[lazySeq.length - 1];
    ret = lastLazySeq.single ? acc[0] : acc;
    opIdx += lazySeq.length;
  }

  return ret;
}

function _processItem({
  item,
  lazySeq,
  acc
}) {
  if (lazySeq.length === 0) {
    acc.push(item);
    return false;
  }

  let lazyResult = {
    done: false,
    hasNext: false
  };
  let isDone = false;

  for (let i = 0; i < lazySeq.length; i++) {
    const lazyFn = lazySeq[i];
    const indexed = lazyFn.indexed;
    const index = lazyFn.index;
    const items = lazyFn.items;
    items.push(item);
    lazyResult = indexed ? lazyFn(item, index, items) : lazyFn(item);
    lazyFn.index++;

    if (lazyResult.hasNext) {
      if (lazyResult.hasMany) {
        const nextValues = lazyResult.next;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = nextValues[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            const subItem = _step2.value;

            const subResult = _processItem({
              item: subItem,
              acc,
              lazySeq: lazySeq.slice(i + 1)
            });

            if (subResult) {
              return true;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return false;
      } else {
        item = lazyResult.next;
      }
    }

    if (!lazyResult.hasNext) {
      break;
    } // process remaining functions in the pipe
    // but don't process remaining elements in the input array


    if (lazyResult.done) {
      isDone = true;
    }
  }

  if (lazyResult.hasNext) {
    acc.push(item);
  }

  if (isDone) {
    return true;
  }

  return false;
}

function createFlow(...operations) {
  return value => flow(value, ...operations);
}

const curry_ = f => curryN_(f.length, f);
const curry = curry_;

const replace_ = (regex, replacer, str) => str.replace(regex, replacer);
const replace = curry3_(replace_);

const dec_ = x => {
  const xx = parseFloat(x);
  return !xx ? x : typedIs.isString(x) ? replace_(`${xx}`, `${xx - 1}`, x) : xx - 1;
};
const dec = dec_;

const defaultTo_ = (d, v) => v == null || v !== v ? d : v;
const defaultTo = curry2_(defaultTo_);

const dispatchWith_ = (pred, fns, ...args) => reduceWhile_((val, nextFn, idx) => {
  if (idx > 0 && !pred(val)) {
    return true;
  }

  return pred(nextFn(...args));
}, (acc, fn, idx) => fn(...args), undefined, toArray(fns));
const dispatchWith = curryN_(2, (pred, fns) => curryN_(maxArgs_(fns), (...args) => dispatchWith_(pred, fns, ...args)));

const omitKey_ = (key, keyedList) => reduce_((accumulated, value, k) => key === k ? accumulated : attach_(k, value, accumulated), empty_(keyedList), keyedList);
const omitKey = curry2_(omitKey_);

// alias
const dissoc = omitKey;

const divide_ = (a, b) => Number(a) / Number(b);
const divide = curry2_(divide_);

const flip2 = fn => (a, b) => fn(b, a);

const divideBy_ = flip2(divide_);
const divideBy = curry2_(divideBy_);

const doWhile_ = (cond, fn, val) => cond(val) ? doWhile_(cond, fn, fn(val)) : val;
const doWhile = curry3_(doWhile_);

const gt_ = (a, b) => a > b;
const gt = curry2_(gt_);

const drop_ = (count, orderedList) => reduce_((acc, value, index) => gt_(index, count - 1) ? append_(value, acc) : acc, empty_(orderedList), orderedList);
const drop = curry2_(drop_);
curry2_(drop_);

// from https://github.com/remeda/remeda/blob/master/src/_reduceLazy.ts
function _reduceLazy(array, lazy, indexed) {
  return array.reduce((acc, item, index) => {
    const result = indexed ? lazy(item, index, array) : lazy(item);

    if (result.hasMany) {
      acc.push(...result.next);
    } else if (result.hasNext) {
      acc.push(result.next);
    }

    return acc;
  }, []);
}

// from https://raw.githubusercontent.com/remeda/remeda/master/src/dropArr.ts
function dropArr() {
  return purry(_dropArr, arguments, dropArr.lazy);
}

function _dropArr(array, n) {
  return _reduceLazy(array, dropArr.lazy(n));
}

function lazy(n) {
  let left = n;
  return value => {
    if (left > 0) {
      left--;
      return {
        done: false,
        hasNext: false
      };
    }

    return {
      done: false,
      hasNext: true,
      next: value
    };
  };
}

dropArr.lazy = lazy;

const values_ = functor => reduceValues_((l, r) => append_(r, l), [], functor);
const values = values_;

const length_ = obj => isNil.isNil(obj) ? undefined : typeof obj.length == 'number' && isInteger.isInteger(obj.length) && obj.length >= 0 ? obj.length : obj.size || values_(obj).length;
const length = length_;

const dropLast_ = (count, orderedList) => {
  if (count < 0) return orderedList;
  const cnt = length_(orderedList) - count - 1;
  return reduce_((acc, v, idx) => gt_(idx, cnt) ? acc : append_(v, acc), empty_(orderedList), orderedList);
};
const dropLast = curry2_(dropLast_);

const either_ = (funcA, funcB) => (...args) => typedIs.isFunction(funcA) ? funcA(...args) || funcB(...args) : funcA || funcB;
const either = curry2_(either_);

const endsWith_ = (subset, set) => set.endsWith(subset);
const endsWith = curry2_(endsWith_);

// Alias
const ensureArray = toArray;

const ensureFunction_ = v => isFunction_(v) ? v : () => v;
const ensureFunction = ensureFunction_;

const identity_ = v => v;
const identity = identity_;

const isObject = isPlainObject.isPlainObject;

const evolve_ = (xfrms, obj) => {
  const evolveInner = (transforms, val, key) => {
    const transform = transforms[key] || identity_;
    return isObject(transform) ? evolve_(transform, val) : transform(val);
  };

  return map_((v, k) => evolveInner(xfrms, v, k), obj);
};
const evolve = curry2_(evolve_);

const F_ = () => false;
const F = F_;

const _toLazyIndexed = fn => {
  fn.indexed = true;
  return fn;
};

function filterArr() {
  return purry(_filterArr(false), arguments, filterArr.lazy);
}

const _filterArr = indexed => (array, fn) => {
  return _reduceLazy(array, indexed ? filterArr.lazyIndexed(fn) : filterArr.lazy(fn), indexed);
};

const _lazy = indexed => fn => {
  return (value, index, array) => {
    const valid = indexed ? fn(value, index, array) : fn(value);

    if (!!valid) {
      return {
        done: false,
        hasNext: true,
        next: value
      };
    }

    return {
      done: false,
      hasNext: false
    };
  };
};

const lazy$1 = _lazy(false);

const lazyIndexed = _toLazyIndexed(_lazy(true));

function indexed() {
  return purry(_filterArr(true), arguments, lazyIndexed);
}

filterArr.lazy = lazy$1;
filterArr.indexed = indexed;
filterArr.lazyIndexed = lazyIndexed;

const is_ = (sig, value) => {
  if (typeof sig === 'string') {
    return type_(value) === sig;
  }

  return !typedIs.isNil(value) && value.constructor === sig || value instanceof sig;
};
const is = curry2_(is_);

const flatten_ = (functor, recursive = true) => {
  const reducer = (subFuc, init = empty_(functor)) => reduce_((acc, value, key) => {
    if (is_(type_(init), value)) {
      return recursive ? reducer(value, acc) : merge_(acc, value);
    }

    return merge_(acc, of_(key, value, init));
  }, init, subFuc);

  return reducer(functor);
};
const flatten = functor => flatten_(functor);

const join_ = (del, arr) => arr.join(del);
const join = curry2_(join_);

const isPopulated_ = x => !isEmpty.isEmpty(x);

const isPopulatedObject_ = x => isObject(x) && isPopulated_(x);
const isPopulatedObject = isPopulatedObject_;

const prepend_ = (value, orderedList) => {
  switch (type_(orderedList)) {
    case 'String':
      {
        return `${value}${orderedList}`;
      }

    case 'Array':
      {
        return [value, ...orderedList];
      }

    default:
      {
        throw new Error(`prepend doesn't know how to deal with ${type_(orderedList)}`);
      }
  }
};
const prepend = curry2_(prepend_);

const flattenTreeDelimiterMapping = nested => reduce_((accumulated, treeOrLeaf, key) => {
  if (isPopulatedObject(treeOrLeaf)) {
    return merge_(accumulated, mapValues_(([keys, leaf]) => append_(leaf, [prepend_(key, keys)]), flattenTreeDelimiterMapping(treeOrLeaf)));
  }

  return prepend_([[key], treeOrLeaf], accumulated);
}, [], nested);

const flattenTree_ = (delimiter, recordTree) => reduce_((accumulated, [keys, value]) => merge_(accumulated, {
  [join_(delimiter, keys)]: value
}), {}, flattenTreeDelimiterMapping(recordTree));
const flattenTree = curry2_(flattenTree_);

const flip_ = fn => curryN_(fn.length, (x, y, ...args) => fn(y, x, ...args));
const flip = flip_;

const forEach_ = (fn, functor) => {
  if (typeof functor.forEach === 'function') {
    functor.forEach((value, key) => {
      fn(value, key);
    });
    return functor;
  }

  return toPairs_(functor).forEach(([key, value]) => {
    fn(value, key);
  });
};
const forEach = curry2_(forEach_);

const fromIteratorToArrayIterator = list => iterator => {
  const _iterator$next = iterator.next(),
        value = _iterator$next.value,
        done = _iterator$next.done;

  if (done) {
    return list;
  }

  return fromIteratorToArrayIterator([...list, value])(iterator);
};

const fromIteratorToArray_ = iterator => fromIteratorToArrayIterator([])(iterator);
const fromIteratorToArray = fromIteratorToArray_;

// // TODO: from Pairs
const fromPairs_ = list => {
  const obj = {};
  let i = 0;

  while (i < list.length) {
    obj[list[i][0]] = list[i][1];
    i++;
  }

  return obj;
};
const fromPairs = fromPairs_;

const getPaths_ = tree => reduceValues_((acc, key) => {
  const value = prop_(key, tree);

  if (is_('Object', value) || is_('Map', value)) {
    return merge_(acc, mapValues_(x => prepend_(key, x), getPaths_(value)));
  }

  return append_([key], acc);
}, [], keys_(tree));
const getPaths = getPaths_;

const mergeWith_ = (fn, initial, functor) => reduce_((acc, value, key) => {
  if (prop_(key, acc)) {
    return attach_(key, fn(prop_(key, acc), value), acc);
  }

  return attach_(key, value, acc);
}, initial, functor);
const mergeWith = curry3_(mergeWith_);

const mergeDeepRight_ = (left, right) => {
  if (isArray.isArray(left) && isArray.isArray(right)) {
    return merge_(left, right);
  }

  if (isObject(left) && isObject(right)) {
    return mergeWith_(mergeDeepRight_, left, right);
  }

  return right;
};
const mergeDeepRight = curry2_(mergeDeepRight_);

const reverse_ = orderedList => reduceValues_((acc, v) => prepend_(v, acc), empty_(orderedList), orderedList);
const reverse = reverse_;

const objOf_ = (keys, value) => reduceValues_((acc, key) => attach_(key, acc, {}), value, reverse_(splitWhenNoSpace_(keys, '.')));
const objOf = curry2_(objOf_);
curry2_(objOf_);

const groupBy_ = (fn, list) => reduceValues_((accumulated, value) => {
  const key = fn(value);
  return key ? mergeDeepRight_(accumulated, objOf_(key, of_(null, value, empty_(list)))) : accumulated;
}, {}, list);
const groupBy = curry2_(groupBy_);

const hammer_ = (key, keyedEnumerable) => merge_(omitKey_(key, keyedEnumerable), path_(key, keyedEnumerable));
const hammer = curry2_(hammer_);

const ifElse_ = (predicate, consequent, alternative, value) => predicate(value) ? consequent(value) : alternative(value);
const ifElse = curryN_(4, ifElse_);

const inc_ = x => {
  const xx = parseFloat(x);
  return !xx ? x : typedIs.isString(x) ? replace_(`${xx}`, `${xx + 1}`, x) : xx + 1;
};
const inc = inc_;

const indexBy_ = (fn, list) => reduceValues_((accumulated, value) => merge_(accumulated, of_(fn(value), value, accumulated)), empty_(first_(Array.from(list))), list);
const indexBy = curry2_(indexBy_);

const inflateTree_ = (delimiter, record) => reduce_((acc, value, key) => mergeDeepRight_(objOf_(split_(delimiter, key), value), acc), empty_(record), record);
const inflateTree = curry2_(inflateTree_);

const invoker_ = (arity, name) => curryN_(arity + 1, (...args) => {
  const obj = args.pop();
  return obj[name](...args);
});
const invoker = curryN_(2, invoker_);

const isEmptyArray_ = v => isArray.isArray(v) && isEmpty.isEmpty(v);
const isEmptyArray = isEmptyArray_;

const isEnumerable_ = value => ['Array', 'Object', 'Map', 'Set', 'String'].includes(type_(value));
const isEnumerable = isEnumerable_;

const isGt_ = flip2(gt_);
const isGt = curry2_(isGt_);

const lt_ = (a, b) => a < b;
const lt = curry2_(lt_);

const isLt_ = flip2(lt_);
const isLt = curry2_(isLt_);

const isNilOrEmpty_ = value => typedIs.isNil(value) || typedIs.isEmpty(value);
const isNilOrEmpty = isNilOrEmpty_;

const complementOne_ = fn => arg => !fn(arg);

const isNotNumber_ = complementOne_(isNumber.isNumber);
const isNotNumber = isNotNumber_;

const isNotObject_ = complementOne_(isObject);
const isNotObject = isNotObject_;

const typeOf_ = value => value === null ? 'null' : typeof value;

const isTypeOf_ = (sig, value) => typeOf_(value) === sig.toLowerCase();

const isObjLike_ = value => isTypeOf_('object', value);
const isObjLike = isObjLike_;

const juxt_ = fns => converge_(argsToList, fns);
const juxt = juxt_;

const liftN_ = (arity, fn) => curryN_(arity, (x, ...args) => reduce_((acc, v) => ap_(acc, v), mapValues_(curryN_(arity, fn), x), args));
const liftN = curryN_(2, liftN_);

const lift_ = fn => liftN_(fn.length, fn);
const lift = lift_;

// from https://github.com/remeda/remeda/blob/master/src/mapArr.ts

function mapArr() {
  return purry(_mapArr(false), arguments, mapArr.lazy);
}

const _mapArr = indexed => (array, fn) => {
  return _reduceLazy(array, indexed ? mapArr.lazyIndexed(fn) : mapArr.lazy(fn), indexed);
};

const _lazy$1 = indexed => fn => {
  return (value, index, array) => {
    return {
      done: false,
      hasNext: true,
      next: indexed ? fn(value, index, array) : fn(value)
    };
  };
};

const lazy$2 = _lazy$1(false);

const lazyIndexed$1 = _toLazyIndexed(_lazy$1(true));

function indexed$1() {
  return purry(_mapArr(true), arguments, lazyIndexed$1);
}

mapArr.lazy = lazy$2;
mapArr.lazyIndexed = lazyIndexed$1;
mapArr.indexed = indexed$1;

const mapKeysWithValueKey_ = (fn, functor) => reduce_((accumulated, value, key) => merge_(accumulated, of_(fn(value, key), value, accumulated)), empty_(functor), functor);
const mapKeysWithValueKey = curry2_(mapKeysWithValueKey_);

const mapKeys_ = (fn, functor) => mapKeysWithValueKey_((_, key) => fn(key), functor);
const mapKeys = curry2_(mapKeys_);

// from https://github.com/remeda/remeda/blob/master/src/mapObj.ts
function mapObj(arg1, arg2) {
  if (arguments.length === 1) {
    return data => _mapObj(data, arg1);
  }

  return _mapObj(arg1, arg2);
}

function _mapObj(obj, fn) {
  return Object.keys(obj).reduce((acc, key) => Object.assign({}, acc, fn(obj[key], key)), {});
}

// from https://github.com/remeda/remeda/blob/master/src/mapObjKeys.ts
function mapObjKeys(arg1, arg2) {
  if (arguments.length === 1) {
    return data => _mapObjKeys(data, arg1);
  }

  return _mapObjKeys(arg1, arg2);
}

function _mapObjKeys(obj, fn) {
  return Object.keys(obj).reduce((acc, key) => {
    const v = obj[key];
    acc[fn(key, v)] = v;
    return acc;
  }, {});
}

// TODO: Remove this Alias of Map
const mapValuesWithValueKey_ = (fn, functor) => {
  if (functor.map instanceof Function) {
    return functor.map((value, key) => fn(value, key));
  }

  return reduce_((accumulated, value, key) => merge_(accumulated, of_(key, fn(value, key), accumulated)), empty_(functor), functor);
};
const mapValuesWithValueKey = curry2_(mapValuesWithValueKey_);

const mergeAll_ = functors => {
  if (last_(functors)) {
    return reduceValues_(merge_, empty_(last_(functors)), functors);
  }

  return functors;
};
const mergeAll = mergeAll_;

const mergeDeepLeft_ = (left, right) => mergeDeepRight_(right, left);
const mergeDeepLeft = curry2_(mergeDeepLeft_);

const mergeAllDeepLeft_ = functors => {
  if (first_(functors)) {
    return reduceValues_(mergeDeepLeft_, empty_(first_(functors)), functors);
  }

  return functors;
};
const mergeAllDeepLeft = mergeAllDeepLeft_;

const mergeAllDeepRight_ = functors => {
  if (last_(functors)) {
    return reduceValues_(mergeDeepRight_, empty_(last_(functors)), functors);
  }

  return functors;
};
const mergeAllDeepRight = mergeAllDeepRight_;

const mergeLeft_ = (left, right) => merge_(right, left);
const mergeLeft = curry2_(mergeLeft_);

const mergeAllLeft_ = functors => {
  if (first_(functors)) {
    return reduceValues_(mergeLeft_, empty_(first_(functors)), functors);
  }

  return functors;
};
const mergeAllLeft = mergeAllLeft_;

// https://github.com/remeda/remeda/blob/master/src/mergeAll.ts
function mergeAllObj(items) {
  return items.reduce((acc, x) => Object.assign({}, acc, x), {});
}

const mergeWithKey_ = (fn, initial, functor) => reduce_((acc, value, key) => {
  if (acc[key]) {
    return Object.assign({}, acc, {
      [key]: fn(acc[key], value, key)
    });
  }

  return attach_(key, value, acc);
}, initial, functor);
const mergeWithKey = curry3_(mergeWithKey_);

const min_ = (l, r) => first_([...toArray_(l), ...toArray_(r)].sort((a, b) => a > b ? 1 : 0));
const min = curry2_(min_);

const multiply_ = (a, b) => a * b;
const multiply = curry2_(multiply_);

/**
 * A function that returns always `undefined`.
 * @signature
 *    F.noop()
 * @example
 *    onSomething(F.noop) // => void
 * @category Function
 */
const noop = () => {};

const not_ = x => !x;
const not = not_;

const omit_ = (keys, obj) => reduce_((acc, key) => omitKey_(key, acc), obj, splitWhenNoSpace_(keys, ','));
const omit = curry2_(omit_);

function omitProp() {
  return purry(_omitProp, arguments);
}

function _omitProp(object, key) {
  return Object.entries(object).reduce((acc, [name, value]) => {
    if (name !== key) {
      acc[name] = value;
    }

    return acc;
  }, {});
}

function omitProps() {
  return purry(_omitProps, arguments);
}

function _omitProps(object, names) {
  const set = new Set(names);
  return Object.entries(object).reduce((acc, [name, value]) => {
    if (!set.has(name)) {
      acc[name] = value;
    }

    return acc;
  }, {});
}

const or_ = (a, b) => a || b;
const or = curry2_(or_);

const pairsKeys_ = pairs => mapValues_(first_, pairs);
const pairsKeys = pairsKeys_;

const pairsValues_ = pairs => mapValues_(last_, pairs);
const pairsValues = pairsValues_;

const partial_ = (f, args) => f.bind(null, ...args);
const partial = curry2_(partial_);

const pathApply_ = (paths = [], fn, obj = {}) => fn(path_(paths, obj));
const pathApply = curry3_(pathApply_);

const pathEq_ = (paths = [], value, obj = {}) => path_(paths, obj) === value;
const pathEq = curry3_(pathEq_);

function pathObj() {
  return purry(_pathObj, arguments);
}

function _pathObj(object, path) {
  let current = object;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = path[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      const prop = _step.value;

      if (current == null || current[prop] == null) {
        return undefined;
      }

      current = current[prop];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return current;
}

const obj = {
  a: {
    b: {
      c: [1]
    }
  },
  y: 10
};
const e = pathObj(obj, ['x']);
const ttt = pathObj(undefined, ['a', 'b', 'c']);
const t = pathObj(obj, ['d']); //export const t2 = pathObj(['a', 'b'])(obj)

const pathOr_ = (d, p, obj) => defaultTo_(d, path_(p, obj));
const pathOr = curry3_(pathOr_);

function pathOrObj() {
  return purry(_pathOrObj, arguments);
}

function _pathOrObj(object, path, defaultValue) {
  let current = object;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = path[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      const prop = _step.value;

      if (current == null || current[prop] == null) {
        return defaultValue;
      }

      current = current[prop];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return current;
}

const obj$1 = {
  a: {
    b: {
      c: 1
    }
  },
  y: 10
};
const ttt$1 = pathOrObj(undefined, ['x'], 1);
const t$1 = pathOrObj(obj$1, ['x'], 2);
const tf = pathOrObj(obj$1, ['a', 'b'], 3);

const paths_ = (keys, keyedEnumerable) => reduceValues_((acc, key) => append_(path_(key, keyedEnumerable), acc), [], splitWhenNoSpace_(keys, ','));
const paths = curry2_(paths_);

const pick_ = (keys, obj) => reduceValues_((acc, key) => {
  const v = prop_(key, obj);
  return isNil_(v) ? acc : attach_(key, v, acc);
}, empty_(obj), splitWhenNoSpace_(keys, ','));
const pick = curry2_(pick_);

const pickAll_ = (keys, keyedEnumerable) => reduceValues_((acc, key) => merge_(acc, objOf_(key, prop_(key, keyedEnumerable))), empty_(keyedEnumerable), keys);
const pickAll = curry2_(pickAll_);

function pickObj() {
  return purry(pickObj_, arguments);
}
function pickObj_(object, names) {
  if (object == null) {
    return {};
  }

  return names.reduce((acc, name) => {
    acc[name] = object[name];
    return acc;
  }, {});
}

const pipe_ = (...fns) => fns.reduceRight((f, g) => (...args) => f(g(...args)), arg => arg);
const pipe = pipe_;

const plucks_ = (keychains, functor) => mapValues_(obj => mapValues_(p => path_(p, obj), splitWhenNoSpace_(keychains, ',')), functor);
const plucks = curry2_(plucks_);

const propEq_ = (name, v, obj) => equals_(v, prop_(name, obj));
const propEq = curry3_(propEq_);

const propOr_ = (d, name, keyedFunctor) => defaultTo_(d, prop_(name, keyedFunctor));
const propOr = curry3_(propOr_);

const props_ = (keys, keyedEnumerable) => reduceValues_((acc, key) => append_(prop_(key, keyedEnumerable), acc), [], splitWhenNoSpace_(keys, ','));
const props = curry2_(props_);

// from https://github.com/remeda/remeda/blob/master/src/range.ts
function range() {
  return purry(range_, arguments);
}
function range_(start, end) {
  const ret = [];

  for (let i = start; i < end; i++) {
    ret.push(i);
  }

  return ret;
}

// from https://raw.githubusercontent.com/remeda/remeda/master/src/reduce.ts
function reduceArr() {
  return purry(reduceArr_(false), arguments);
}
const reduceArr_ = indexed => (items, fn, initialValue) => {
  return items.reduce((acc, item, index) => indexed ? fn(acc, item, index, items) : fn(acc, item), initialValue);
};

function indexed$2() {
  return purry(reduceArr_(true), arguments);
}

reduceArr.indexed = indexed$2;

const reduceRight_ = (reducer, initial, functor) => reduce_(reducer, initial, functor, true);
const reduceRight$1 = curry3_(reduceRight_);

const sequence_ = (fns, value) => map_(fn => applyTo_(value, fn), fns);
const sequence = curry2_(sequence_);

// https://raw.githubusercontent.com/remeda/remeda/master/src/setObj.ts
function setObj() {
  return purry(setObj_, arguments);
}
function setObj_(obj, prop, value) {
  return Object.assign({}, obj, {
    [prop]: value
  });
}

const simplyEquals_ = (a, b) => a === b;
const simplyEquals = curry2_(simplyEquals_);

const take_ = (count, orderedList) => count < 0 ? orderedList : reduce_((acc, v, idx) => gt_(idx, count - 1) ? acc : append_(v, acc), empty_(orderedList), orderedList);
const take = curry2_(take_);

const startsWith_ = (prefix, list) => equals_(take_(prefix.length, list), prefix);
const startsWith = curry2_(startsWith_);

const subtract_ = (a, b) => Number(a) - Number(b);
const subtract = curry2_(subtract_);

const T_ = () => true;
const T = T_;

const tail_ = x => drop_(1, x);
const tail = tail_;

//   n: number,
// ): <T extends [T0] extends [never] ? any : T0>(array: T[]) => T[]

function takeArr() {
  return purry(_takeArr, arguments, takeArr.lazy);
}

function _takeArr(array, n) {
  return _reduceLazy(array, takeArr.lazy(n));
}

function lazy$3(n) {
  return value => {
    if (n === 0) {
      return {
        done: true,
        hasNext: false
      };
    }

    n--;

    if (n === 0) {
      return {
        done: true,
        hasNext: true,
        next: value
      };
    }

    return {
      done: false,
      hasNext: true,
      next: value
    };
  };
}

takeArr.lazy = lazy$3;

const takeLast_ = (count, orderedList) => {
  if (count < 0) return orderedList;
  const cnt = length_(orderedList) - count;
  return reduce_((acc, v, idx) => lt_(idx, cnt) ? acc : append_(v, acc), empty_(orderedList), orderedList);
};
const takeLast = curry2_(takeLast_);

// from https://github.com/remeda/remeda/blob/master/src/take.test.ts
function takeLazy() {
  return purry(_takeLazy, arguments, takeLazy.lazy);
}

function _takeLazy(array, n) {
  return _reduceLazy(array, takeLazy.lazy(n));
}

function lazy$4(n) {
  return value => {
    if (n === 0) {
      return {
        done: true,
        hasNext: false
      };
    }

    n--;

    if (n === 0) {
      return {
        done: true,
        hasNext: true,
        next: value
      };
    }

    return {
      done: false,
      hasNext: true,
      next: value
    };
  };
}

takeLazy.lazy = lazy$4;

const tap_ = (fn, value) => {
  fn(value);
  return value;
};
const tap = curry2_(tap_);

const eval_ = v => {
  let val;

  try {
    val = new Function(`return ${v}`)();
  } catch (error) {
    return v;
  }

  return val;
};

const template_ = (string, data) => typedIs.isString(string) ? eval_(string.replace(/{\!([^}]+)}/g, (_, key) => {
  const res = path_(key, data);
  return res;
})) : string;
const template = curry2_(template_);

var cloneRegExp_ = (pattern => new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : '')));

const test_ = (pattern, str) => {
  if (type_(pattern) !== 'RegExp') {
    throw new TypeError(`‘test’ requires a value of type RegExp as its first argument; received ${type_(pattern)}`);
  }

  return cloneRegExp_(pattern).test(str);
};
const test = curry2_(test_);

const toCamelCase_ = str => str.trim().split(/[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]+/).reduce((res, word, i) => word === '' ? res : res.concat(i > 0 ? word[0].toUpperCase() : word[0].toLowerCase(), word.slice(1)), '');
const toCamelCase = toCamelCase_;

const toKebabCase_ = str => str.replace(/[A-Z\u00C0-\u00D6\u00D9-\u00DD]/g, match => ` ${match.toLowerCase() || match}`).trim().split(/[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/).join('-');
const toKebabCase = toKebabCase_;

const toLower_ = str => str.toLowerCase();
const toLower = toLower_;

const TEN = 10;
const ONE_HUNDRED = 100;
const ONE_THOUSAND = 1000;
const ONE_MILLION = 1000000;
const ONE_BILLION = 1000000000; //         1.000.000.000 (9)

const ONE_TRILLION = 1000000000000; //     1.000.000.000.000 (12)

const ONE_QUADRILLION = 1000000000000000; // 1.000.000.000.000.000 (15)

const MAX = 9007199254740992; // 9.007.199.254.740.992 (15)

const LESS_THAN_TWENTY = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENTHS_LESS_THAN_HUNDRED = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const NativeFloor = Math.floor;

function generateWords(number, words) {
  let remainder, word; // We’re done

  if (number === 0) {
    return !words ? 'zero' : words.join(' ').replace(/,$/, '');
  } // First run


  if (!words) {
    words = [];
  } // If negative, prepend “minus”


  if (number < 0) {
    words.push('minus');
    number = Math.abs(number);
  }

  if (number < 20) {
    remainder = 0;
    word = LESS_THAN_TWENTY[number];
  } else if (number < ONE_HUNDRED) {
    remainder = number % TEN;
    word = TENTHS_LESS_THAN_HUNDRED[NativeFloor(number / TEN)]; // In case of remainder, we need to handle it here to be able to add the “-”

    if (remainder) {
      word += `-${LESS_THAN_TWENTY[remainder]}`;
      remainder = 0;
    }
  } else if (number < ONE_THOUSAND) {
    remainder = number % ONE_HUNDRED;
    word = `${generateWords(NativeFloor(number / ONE_HUNDRED))} hundred`;
  } else if (number < ONE_MILLION) {
    remainder = number % ONE_THOUSAND;
    word = `${generateWords(NativeFloor(number / ONE_THOUSAND))} thousand,`;
  } else if (number < ONE_BILLION) {
    remainder = number % ONE_MILLION;
    word = `${generateWords(NativeFloor(number / ONE_MILLION))} million,`;
  } else if (number < ONE_TRILLION) {
    remainder = number % ONE_BILLION;
    word = `${generateWords(NativeFloor(number / ONE_BILLION))} billion,`;
  } else if (number < ONE_QUADRILLION) {
    remainder = number % ONE_TRILLION;
    word = `${generateWords(NativeFloor(number / ONE_TRILLION))} trillion,`;
  } else if (number <= MAX) {
    remainder = number % ONE_QUADRILLION;
    word = `${generateWords(NativeFloor(number / ONE_QUADRILLION))} quadrillion,`;
  }

  words.push(word);
  return generateWords(remainder, words);
}

const toWords_ = number => {
  const num = parseInt(number, 10);
  if (!typedIs.isFinite(num)) throw new TypeError(`Not a finite number: ${number} (${typeof number})`);
  return generateWords(num);
};
const toWords = toWords_;

const toOrdinal_ = number => {
  const words = toWords_(number); // Ends with *00 (100, 1000, etc.) or *teen (13, 14, 15, 16, 17, 18, 19)

  if (/(hundred|thousand|(m|b|tr|quadr)illion)$/.test(words) || /teen$/.test(words)) {
    return `${words}th`;
  } // Ends with *y (20, 30, 40, 50, 60, 70, 80, 90)
  else if (/y$/.test(words)) {
      return words.replace(/y$/, 'ieth');
    } // Ends with one through twelve
    else if (/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/.test(words)) {
        const ordinalLessThanThirteen = {
          zero: 'zeroth',
          one: 'first',
          two: 'second',
          three: 'third',
          four: 'fourth',
          five: 'fifth',
          six: 'sixth',
          seven: 'seventh',
          eight: 'eighth',
          nine: 'ninth',
          ten: 'tenth',
          eleven: 'eleventh',
          twelve: 'twelfth'
        };
        return words.replace(/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/, (_, numberWord) => ordinalLessThanThirteen[numberWord]);
      }

  return words;
};
const toOrdinal = toOrdinal_;

const toPascalCase_ = str => str.split(/[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/).reduce((res, word) => word === '' ? res : res.concat(word[0].toUpperCase(), word.slice(1)), '');
const toPascalCase = toPascalCase_;

const toSnakeCase_ = str => str.replace(/[A-Z\u00C0-\u00D6\u00D9-\u00DD]/g, match => ` ${match.toLowerCase() || match}`).trim().split(/[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/).join('_');
const toSnakeCase = toSnakeCase_;

const toString_ = value => {
  if (isNil.isNil(value)) return type_(value);
  if (isString.isString(value)) return value;
  return isFunction.isFunction(value.toString) ? value.toString() : Object.prototype.toString.apply(value);
};
const toString = toString_;

const toUpper_ = str => str.toUpperCase();
const toUpper = toUpper_;

const tryCatch_ = (tryer, catcher) => curryN_(tryer.length, (...args) => {
  try {
    return tryer(...args);
  } catch (e) {
    return catcher(e, ...args);
  }
});
const tryCatch = curryN_(2, tryCatch_);

const unapply_ = f => (...args) => f(args); // unapply :: ([a] -> b) -> a... -> b

const unapply = unapply_;

const uniq_ = array => [...new Set(array)];
const uniq = uniq_;

function uniqLazy() {
  return purry(_uniqLazy, arguments, uniqLazy.lazy);
}

function _uniqLazy(array) {
  return _reduceLazy(array, uniqLazy.lazy());
}

function lazy$5() {
  const set = new Set();
  return value => {
    if (set.has(value)) {
      return {
        done: false,
        hasNext: false
      };
    }

    set.add(value);
    return {
      done: false,
      hasNext: true,
      next: value
    };
  };
}

uniqLazy.lazy = lazy$5;

const unless_ = (cond, fn, val) => cond(val) ? val : fn(val);
const unless = curry3_(unless_);

const update_ = (i, v, l) => Math.abs(i) >= l.length ? l : assoc_(i < 0 ? l.length + i : i, v, l);
const update = curry3_(update_);

const useWith_ = (cb, enhancers) => curryN_(enhancers.length, (...args) => cb.apply(cb, enhancers.map((enhancer, idx) => enhancer(args[idx]))));
const useWith = curryN_(2, useWith_);

const whenFunctionCallWith_ = (...args) => test => isFunction.isFunction(test) ? test(...args) : test;
const whenFunctionCallWith = whenFunctionCallWith_;

const where_ = (matcher, keyedEnumerable) => reduce_((latest, value, key) => latest && value(path_(toArray_(key), keyedEnumerable)), true, matcher);
const where = curry2_(where_);

const whereEq_ = (spec, testObj) => where_(mapValues_(a => b => equals_(a, b), spec), testObj);
const whereEq = curry2_(whereEq_);

const xfrm_ = (xfrms, val, key) => {
  let f = xfrms[key] || identity_;
  return typeof f === 'object' ? evolve_(f, val) : f(val);
};
const xfrm = curry3_(xfrm_);

const xprod_ = (a, b) => {
  const res = [];
  let ia = 0;
  let ib;
  const alen = a.length;
  const blen = b.length;

  while (ia < alen) {
    ib = 0;

    while (ib < blen) {
      res.push([a[ia], b[ib]]);
      ib += 1;
    }

    ia += 1;
  }

  return res;
};
const xprod = curry2_(xprod_);

const xPairs_ = (a, b) => xprod_(toArray_(a), b);
const xPairs = curry2_(xPairs_);

const zip_ = (left, right) => {
  if (type_(left) !== type_(right)) {
    throw new Error('left and right were not the same functor type_');
  }

  return reduce_((acc, point) => attach_(point, [prop_(point, left), prop_(point, right)], acc), empty_(right), uniq_([...keys_(left), ...keys_(right)]));
};
const zip = curry2_(zip_);

const zipApply_ = (fns, functor) => {
  if (length_(fns) !== length_(functor)) {
    throw new Error('left and right werent the same size');
  }

  return mapValues_(x => reduceValues_(call_, call_, x), zip_(fns, functor));
};
const zipApply = curry2_(zipApply_);

exports.isFunction = isFunction.isFunction;
exports.isNil = isNil.isNil;
exports.isString = isString.isString;
exports.isBoolean = isBoolean;
exports.isEmpty = isEmpty__default;
exports.isArray = isArray.isArray;
exports.isFalse = isFalse.isFalse;
exports.isNumber = isNumber.isNumber;
exports.isTrue = isTrue.isTrue;
exports.addIndex = addIndex;
exports.all = all;
exports.allPass = allPass;
exports.always = always;
exports.any = any;
exports.anyPass = anyPass;
exports.ap = ap;
exports.apply = apply;
exports.applyTo = applyTo;
exports.argsToList = argsToList;
exports.assoc = assoc;
exports.assocPath = assocPath;
exports.attach = attach;
exports.both = both;
exports.call = call;
exports.capitalize = capitalize;
exports.cascadingPath = cascadingPath;
exports.cleanWhitespace = cleanWhitespace;
exports.compact = compact;
exports.comparator = comparator;
exports.complement = complement;
exports.compose = compose;
exports.concat = concat;
exports.contains = contains;
exports.converge = converge;
exports.createFlow = createFlow;
exports.curry = curry;
exports.curryN = curryN;
exports.dec = dec;
exports.defaultTo = defaultTo;
exports.dispatchWith = dispatchWith;
exports.dissoc = dissoc;
exports.divide = divide;
exports.divideBy = divideBy;
exports.doWhile = doWhile;
exports.drop = drop;
exports.dropArr = dropArr;
exports.dropLast = dropLast;
exports.either = either;
exports.empty = empty;
exports.endsWith = endsWith;
exports.ensureArray = ensureArray;
exports.ensureFunction = ensureFunction;
exports.equals = equals;
exports.evolve = evolve;
exports.F = F;
exports.filter = filter;
exports.filterArr = filterArr;
exports.first = first;
exports.flatten = flatten;
exports.flattenTree = flattenTree;
exports.flip = flip;
exports.flow = flow;
exports.forEach = forEach;
exports.fromIteratorToArray = fromIteratorToArray;
exports.fromPairs = fromPairs;
exports.getPaths = getPaths;
exports.groupBy = groupBy;
exports.gt = gt;
exports.hammer = hammer;
exports.has = has;
exports.identity = identity;
exports.ifElse = ifElse;
exports.inc = inc;
exports.indexBy = indexBy;
exports.inflateTree = inflateTree;
exports.invoker = invoker;
exports.is = is;
exports.isEmptyArray = isEmptyArray;
exports.isEnumerable = isEnumerable;
exports.isGt = isGt;
exports.isLt = isLt;
exports.isNilOrEmpty = isNilOrEmpty;
exports.isNotNumber = isNotNumber;
exports.isNotObject = isNotObject;
exports.isObject = isObject;
exports.isObjLike = isObjLike;
exports.isPopulatedObject = isPopulatedObject;
exports.join = join;
exports.juxt = juxt;
exports.keys = keys;
exports.last = last;
exports.length = length;
exports.lift = lift;
exports.liftN = liftN;
exports.lt = lt;
exports.map = map;
exports.mapArr = mapArr;
exports.mapKeys = mapKeys;
exports.mapKeysWithValueKey = mapKeysWithValueKey;
exports.mapObj = mapObj;
exports.mapObjKeys = mapObjKeys;
exports.mapValues = mapValues;
exports.mapValuesWithValueKey = mapValuesWithValueKey;
exports.max = max;
exports.merge = merge;
exports.mergeAll = mergeAll;
exports.mergeAllDeepLeft = mergeAllDeepLeft;
exports.mergeAllDeepRight = mergeAllDeepRight;
exports.mergeAllLeft = mergeAllLeft;
exports.mergeAllObj = mergeAllObj;
exports.mergeDeepLeft = mergeDeepLeft;
exports.mergeDeepRight = mergeDeepRight;
exports.mergeLeft = mergeLeft;
exports.mergeWith = mergeWith;
exports.mergeWithKey = mergeWithKey;
exports.min = min;
exports.multiply = multiply;
exports.noop = noop;
exports.not = not;
exports.nth = nth;
exports.objOf = objOf;
exports.of = of;
exports.omit = omit;
exports.omitKey = omitKey;
exports.omitProp = omitProp;
exports.omitProps = omitProps;
exports.or = or;
exports.pairsKeys = pairsKeys;
exports.pairsValues = pairsValues;
exports.partial = partial;
exports.path = path;
exports.pathApply = pathApply;
exports.pathEq = pathEq;
exports.pathObj = pathObj;
exports.pathOr = pathOr;
exports.pathOrObj = pathOrObj;
exports.paths = paths;
exports.pick = pick;
exports.pickAll = pickAll;
exports.pickObj = pickObj;
exports.pipe = pipe;
exports.pluck = pluck;
exports.plucks = plucks;
exports.prop = prop;
exports.propEq = propEq;
exports.propOr = propOr;
exports.props = props;
exports.purry = purry;
exports.range = range;
exports.reduce = reduce;
exports.reduceArr = reduceArr;
exports.reduceKeys = reduceKeys;
exports.reduceRight = reduceRight$1;
exports.reduceValues = reduceValues;
exports.reduceWhile = reduceWhile;
exports.reject = reject;
exports.rejectNil = rejectNil;
exports.replace = replace;
exports.replaceWhen = replaceWhen;
exports.reverse = reverse;
exports.sequence = sequence;
exports.setObj = setObj;
exports.simplyEquals = simplyEquals;
exports.split = split;
exports.startsWith = startsWith;
exports.subtract = subtract;
exports.T = T;
exports.tail = tail;
exports.take = take;
exports.takeArr = takeArr;
exports.takeLast = takeLast;
exports.takeLazy = takeLazy;
exports.tap = tap;
exports.template = template;
exports.test = test;
exports.toArray = toArray;
exports.toCamelCase = toCamelCase;
exports.toKebabCase = toKebabCase;
exports.toLower = toLower;
exports.toOrdinal = toOrdinal;
exports.toPairs = toPairs;
exports.toPascalCase = toPascalCase;
exports.toSnakeCase = toSnakeCase;
exports.toString = toString;
exports.toUpper = toUpper;
exports.toWords = toWords;
exports.tryCatch = tryCatch;
exports.type = type;
exports.unapply = unapply;
exports.uniq = uniq;
exports.uniqLazy = uniqLazy;
exports.unless = unless;
exports.update = update;
exports.useWith = useWith;
exports.values = values;
exports.when = when;
exports.whenFunctionCallWith = whenFunctionCallWith;
exports.where = where;
exports.whereEq = whereEq;
exports.xfrm = xfrm;
exports.xPairs = xPairs;
exports.zip = zip;
exports.zipApply = zipApply;
