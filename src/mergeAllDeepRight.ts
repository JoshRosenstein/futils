import { reduceValues_ } from './reduceValues';
import { mergeDeepRight_ } from './mergeDeepRight';
import { last_ } from './last';
import { empty_ } from './empty';

export const mergeAllDeepRight_ = (functors) => {
  if (last_(functors)) {
    return reduceValues_(mergeDeepRight_, empty_(last_(functors)), functors);
  }

  return functors;
};
export const mergeAllDeepRight = mergeAllDeepRight_;

export default mergeAllDeepRight;
