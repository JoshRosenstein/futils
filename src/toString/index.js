import isNil from "../isNil";
import is from "../is";
import type from "../type";
// import keys from "../keys";
// const coverageCodeRegex = () =>
//   /(?:__cov_(?:[\w\W\S.,$]{1,22})\.(?:.{1})\[\'(?:\d{1,})\'\](?:\[(?:\d{1,})\])*?\+\+\;)/;

const _quote = s => {
  var escaped = s
    .replace(/\\/g, "\\\\")
    .replace(/[\b]/g, "\\b") // \b matches word boundary; [\b] matches backspace
    .replace(/\f/g, "\\f")
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/\t/g, "\\t")
    .replace(/\v/g, "\\v")
    .replace(/\0/g, "\\0");

  return '"' + escaped.replace(/"/g, '\\"') + '"';
};
// const cleanupCoverageCode = str => {
//   if (typeof str !== "string") {
//     throw new TypeError("cleanup-coverage-code: expect `str` be string");
//   }

//   if (!coverageCodeRegex().test(str)) {
//     return str;
//   }

//   return str
//     .split(coverageCodeRegex())
//     .filter(Boolean)
//     .filter(function(val) {
//       return coverageCodeRegex().test(val) ? false : true;
//     })
//     .join("");
// };

// export function args(agts) {
//   return Array.prototype.slice.call(agts);
// }

// let _includes = function(val, xs) {
//   return args(arguments).length > 1
//     ? xs.indexOf(val) > -1
//     : ys => _includes(val, ys);
// };

// let _map = function(f, xs) {
//   return args(arguments).length > 1 ? xs.map(f) : xs => xs.map(f);
// };

// const _toString = (value, seen) => {
//   var recur = function recur(y) {
//     var xs = seen.concat([value]);
//     return _includes(y, xs) ? "<Circular>" : _toString(y, xs);
//   };

//   var mapPairs = function(obj, keys) {
//     return _map(function(k) {
//       return _quote(k) + ": " + recur(obj[k]);
//     }, keys.slice().sort());
//   };

//   const t = Object.prototype.toString.call(value);

//   switch (Object.prototype.toString.call(value)) {
//     case "[object Null]":
//       return "null";
//     case "[object Undefined]":
//       return "undefined";

//     case "[object String]":
//       return typeof value === "object"
//         ? "new String(" + value.valueOf() + ")"
//         : _quote(value);

//     default:
//       if (typeof value.toString === "function") {
//         var repr = value.toString();
//         if (repr !== "[object Object]") {
//           return repr;
//         }
//       }
//       return "{" + mapPairs(value, Object.keys(value)).join(", ") + "}";
//   }

//   if (typeof value.toString === "functddion") {
//     return cleanupCoverageCode(value.toString()).replace("){", ") {");
//   }
//   return !isNil(value) && typeof value.toString === "function"
//     ? value.toString()
//     : Object.prototype.toString.apply(value);
// };

export default value => {
  if (value === null) {
    return "null";
  }

  if (value === undefined) {
    return "undefined";
  }

  if (is("String")(value)) {
    return _quote(value);
  }

  return !isNil(value) && typeof value.toString === "function"
    ? value.toString()
    : Object.prototype.toString.apply(value);
};
//export default _toString;
