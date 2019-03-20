import { type_ } from './type';
export const isEnumerable_ = value => ['Array', 'Object', 'Map', 'Set', 'String'].includes(type_(value));
export const isEnumerable = isEnumerable_;
export default isEnumerable;
//# sourceMappingURL=isEnumerable.js.map