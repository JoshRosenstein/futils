// @flow
import append_ from './append_'
import reduceKeys_ from './reduceKeys_'
import type {KeyedEnumerableType, KeyType} from 'types'

export default (keyedObj: KeyedEnumerableType): Array<KeyType> =>
  reduceKeys_((acc, key) => append_(key, acc), [], keyedObj)
