import { reduceValues_ } from './reduceValues';
import { merge_ } from './merge';
import { last_ } from './last';
import { empty_ } from './empty';
export const mergeAll_ = functors => {
    if (last_(functors)) {
        return reduceValues_(merge_, empty_(last_(functors)), functors);
    }
    return functors;
};
export const mergeAll = mergeAll_;
export default mergeAll;
