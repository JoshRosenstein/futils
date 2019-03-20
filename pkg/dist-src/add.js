import { purry } from './purry';
export function add() {
    return purry(add_, arguments);
}
export function add_(a, b) {
    return Number(a) + Number(b);
}
export default add;
//# sourceMappingURL=add.js.map