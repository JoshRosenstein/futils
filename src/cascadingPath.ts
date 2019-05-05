import { curry2_ } from './_internal/curry2_';
import { isNil } from 'typed-is';
import { path_ } from './path';
import { reduceValues_ } from './reduceValues';
import { replaceWhen_ } from './replaceWhen';

export const cascadingPath_ = (paths, tree) =>
  reduceValues_(
    (filler, p) => {
      if (isNil(filler)) {
        return path_(p, tree);
      }

      return path_(replaceWhen_(isNil, filler, p), tree);
    },
    null,
    paths,
  );
export const cascadingPath = curry2_(cascadingPath_);

export default cascadingPath;
