import { curry2_ } from './_internal/curry2_';
import { isNil } from './isNil';
export const prop_ = (name, keyedFunctor) => {
    if (isNil(keyedFunctor)) {
        return keyedFunctor;
    }
    if (keyedFunctor.get) {
        return keyedFunctor.get(name);
    }
    return keyedFunctor[name];
};
// export interface Prop {
//   prop<P extends keyof T, T>(p: P, obj: T): T[P]
//   prop<P extends string>(p: P): <T>(obj: Record<P, T>) => T
//   prop<P extends string, T>(p: P): (obj: Record<P, T>) => T
// }
// export function prop(name: any, keyedFunctor: any): any
// export function prop(name: any): (keyedFunctor: any) => any
// export function prop() {
//   return curry2_(prop_)(arguments)
// }
export const prop = curry2_(prop_);
export default prop;
