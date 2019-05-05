import { reduceValues_ } from './reduceValues';
import { empty_ } from './empty';
import { prepend_ } from './prepend';

export const reverse_ = (orderedList) =>
  reduceValues_((acc, v) => prepend_(v, acc), empty_(orderedList), orderedList);
export const reverse = reverse_;
export default reverse;
