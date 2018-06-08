import type from "../type";
import curry from "../curry";

export default curry(
  (sig, value) =>
    sig === "null"
      ? value === null
      : sig === "undefined"
        ? value === undefined
        : value === undefined || value === null ? false : type(value) === sig
);
