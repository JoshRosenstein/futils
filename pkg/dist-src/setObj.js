// https://raw.githubusercontent.com/remeda/remeda/master/src/setObj.ts
import { purry } from './purry';
export function setObj() {
    return purry(setObj_, arguments);
}
export function setObj_(obj, prop, value) {
    return Object.assign({}, obj, { [prop]: value });
}
export default setObj;
//# sourceMappingURL=setObj.js.map