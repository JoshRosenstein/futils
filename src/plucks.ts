import { curry2_ } from './_internal/curry2_';
import { path_ } from './path';
import { mapValues_ } from './mapValues';
import { splitWhenNoSpace_ } from './_internal/splitWhenNoSpace_';

export const plucks_ = (keychains, functor) =>
  mapValues_(
    (obj) =>
      mapValues_((p) => path_(p, obj), splitWhenNoSpace_(keychains, ',')),
    functor,
  );
export const plucks = curry2_(plucks_);
export default plucks;
