import is from "../is";

var toString = Object.prototype.toString;

function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var _isArguments = (function() {
  return toString.call(arguments) === "[object Arguments]"
    ? function _isArguments(x) {
        return toString.call(x) === "[object Arguments]";
      }
    : function _isArguments(x) {
        return _has("callee", x);
      };
})();

export default x =>
  x != null && typeof x.empty === "function"
    ? x.empty()
    : x != null &&
      x.constructor != null &&
      typeof x.constructor.empty === "function"
      ? x.constructor.empty()
      : is("Array")(x)
        ? []
        : is("String")(x)
          ? ""
          : is("Object")(x)
            ? {}
            : _isArguments(x)
              ? (function() {
                  return arguments;
                })()
              : // else
                void 0;
