import { curry3_ } from './_internal/curry3_';
export const replace_ = (regex, replacer, str) => str.replace(regex, replacer);
export const replace = curry3_(replace_);
export default replace;
//# sourceMappingURL=replace.js.map