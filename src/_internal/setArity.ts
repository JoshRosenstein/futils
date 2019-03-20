/* eslint no-unused-vars: 0, prefer-rest-params: 0 */

export default function _setArity(arity, fn) {
  switch (arity) {
    case 0:
      return function arity0() {
        return fn(...arguments)
      }
    case 1:
      return function arity1(_a) {
        return fn(...arguments)
      }
    case 2:
      return function arity2(_a, _b) {
        return fn(...arguments)
      }
    case 3:
      return function arity3(_a, _b, _c) {
        return fn(...arguments)
      }
    case 4:
      return function arity4(_a, _b, _c, _d) {
        return fn(...arguments)
      }
    case 5:
      return function arity5(_a, _b, _c, _d, _e) {
        return fn(...arguments)
      }
    case 6:
      return function arity6(_a, _b, _c, _d, _e, _f) {
        return fn(...arguments)
      }
    case 7:
      return function arity7(_a, _b, _c, _d, _e, _f, _g) {
        return fn(...arguments)
      }
    case 8:
      return function arity8(_a, _b, _c, _d, _e, _f, _g, _h) {
        return fn(...arguments)
      }
    case 9:
      return function arity9(_a, _b, _c, _d, _e, _f, _g, _h, _i) {
        return fn(...arguments)
      }
    default:
      return fn
  }
}
