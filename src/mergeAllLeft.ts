import {reduceValues_} from './reduceValues'
import {mergeLeft_} from './mergeLeft'
import {first_} from './first'
import {empty_} from './empty'

export const mergeAllLeft_ = functors => {
  if (first_(functors)) {
    return reduceValues_(mergeLeft_, empty_(first_(functors)), functors)
  }

  return functors
}
export const mergeAllLeft = mergeAllLeft_

export default mergeAllLeft
