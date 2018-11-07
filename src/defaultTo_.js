// @flow
type DefaultTo_ = <T, V>(d: T, x: ?V) => V | T

const defaultTo_: DefaultTo_ = (d, v) => (v == null || v !== v ? d : v)

export default defaultTo_
