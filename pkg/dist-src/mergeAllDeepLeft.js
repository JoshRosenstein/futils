import { reduceValues_ } from './reduceValues';
import { mergeDeepLeft_ } from './mergeDeepLeft';
import { first_ } from './first';
import { empty_ } from './empty';
export const mergeAllDeepLeft_ = functors => {
    if (first_(functors)) {
        return reduceValues_(mergeDeepLeft_, empty_(first_(functors)), functors);
    }
    return functors;
};
export const mergeAllDeepLeft = mergeAllDeepLeft_;
export default mergeAllDeepLeft;
