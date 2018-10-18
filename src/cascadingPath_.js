import reduceValues_ from './reduceValues_'
import replaceWhen_ from './replaceWhen_'
import isNil_ from './isNil_'
import path_ from './path_'

export default (paths, tree) =>
  reduceValues_(
    (filler, p) => {
      if (isNil_(filler)) {
        return path_(p, tree)
      }

      return path_(replaceWhen_(isNil_, filler, p), tree)
    },
    null,
    paths,
  )
