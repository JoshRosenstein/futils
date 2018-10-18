// @flow

declare function always_<T: mixed>(value: T): () => T

export default function always_(value) {
  return function alwaysValue() {
    return value
  }
}
