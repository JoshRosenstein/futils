export const always_ = <T>(x: T) => (...args: any[]): T => x
export const always = always_
export default always
