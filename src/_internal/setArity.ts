/* eslint no-unused-vars: 0, prefer-rest-params: 0 */

export default function _setArity(arity, fn) {
  switch (arity) {
    case 0:
      return function arity0() {
        return fn(...arguments)
      }
    case 1:
      return function arity1(a) {
        return fn(...arguments)
      }
    case 2:
      return function arity2(a, b) {
        return fn(...arguments)
      }
    case 3:
      return function arity3(a, b, c) {
        return fn(...arguments)
      }
    case 4:
      return function arity4(a, b, c, d) {
        return fn(...arguments)
      }
    case 5:
      return function arity5(a, b, c, d, e) {
        return fn(...arguments)
      }
    case 6:
      return function arity6(a, b, c, d, e, f) {
        return fn(...arguments)
      }
    case 7:
      return function arity7(a, b, c, d, e, f, g) {
        return fn(...arguments)
      }
    case 8:
      return function arity8(a, b, c, d, e, f, g, h) {
        return fn(...arguments)
      }
    case 9:
      return function arity9(a, b, c, d, e, f, g, h, i) {
        return fn(...arguments)
      }
    default:
      return fn
  }
}
