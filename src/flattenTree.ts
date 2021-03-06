import { append_ } from './append';
import { curry2_ } from './_internal/curry2_';
import { isPopulatedObject } from './isPopulatedObject';
import { join_ } from './join';
import { mapValues_ } from './mapValues';
import { merge_ } from './merge';
import { prepend_ } from './prepend';
import { reduce_ } from './reduce';

const flattenTreeDelimiterMapping = (nested) =>
  reduce_(
    (accumulated, treeOrLeaf, key) => {
      if (isPopulatedObject(treeOrLeaf)) {
        return merge_(
          accumulated,
          mapValues_(
            ([keys, leaf]) => append_(leaf, [prepend_(key, keys)]),
            flattenTreeDelimiterMapping(treeOrLeaf),
          ),
        );
      }

      return prepend_([[key], treeOrLeaf], accumulated);
    },
    [],
    nested,
  );

export const flattenTree_ = (delimiter, recordTree) =>
  reduce_(
    (accumulated, [keys, value]) =>
      merge_(accumulated, { [join_(delimiter, keys)]: value }),
    {},
    flattenTreeDelimiterMapping(recordTree),
  );

export const flattenTree = curry2_(flattenTree_);

export default flattenTree;
