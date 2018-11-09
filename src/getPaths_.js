import prop_ from './prop_'
import reduceValues_ from './reduceValues_'
import is_ from './is_'
import mapValues_ from './mapValues_'
import prepend_ from './prepend_'
import append from './append'
import keys_ from './keys_'
import merge_ from './merge_'

const getPaths_ = tree =>
  reduceValues_(
    (acc, key) => {
      const value = prop_(key, tree)
      if (is_('Object', value) || is_('Map', value)) {
        return merge_(acc, mapValues_(x => prepend_(key, x), getPaths_(value)))
      }
      return append([key], acc)
    },
    [],
    keys_(tree),
  )

export default getPaths_
