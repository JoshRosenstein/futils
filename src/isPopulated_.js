// @flow
import empty_ from './empty_'
import equals_ from './equals_'
import isDefined_ from './isDefined_'
import type {FunctorType} from 'types'
//FunctorType

export default (x: FunctorType): boolean =>
  isDefined_(x) && !equals_(x, empty_(x))
