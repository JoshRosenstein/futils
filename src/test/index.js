import curry from "../curry";

const isRegex = x => Object.prototype.toString.call(x) === "[object RegExp]";

const cloneRegExp = pattern => {
  return new RegExp(
    pattern.source,
    (pattern.global ? "g" : "") +
      (pattern.ignoreCase ? "i" : "") +
      (pattern.multiline ? "m" : "") +
      (pattern.sticky ? "y" : "") +
      (pattern.unicode ? "u" : "")
  );
};

export default curry((pattern, str) => {
  if (!isRegex(pattern)) {
    throw new TypeError(
      "‘test’ requires a value of type RegExp as its first argument; received " +
        toString(pattern)
    );
  }
  return cloneRegExp(pattern).test(str);
});
