import type from "../type";

export default (symbolName, f) => {
  if (!f || typeof f !== "function") {
    throw new Error(
      `${symbolName} should be a function. ` +
        `Type received: ${type(f)};  Value received: ${f}.`
    );
  }
  return f;
};
