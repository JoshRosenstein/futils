export const always_ = <T>(x: T) => (..._: any[]): T => x;
export const always = always_;
export default always;
