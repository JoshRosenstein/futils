// @flow

type Always_ = <T>(x: T) => (...args?: any[]) => T

const always_: Always_ = x => (...args) => x

export default always_
