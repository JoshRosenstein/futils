// @flow

import type_ from './type_'
import fromIteratorToArray_ from './fromIteratorToArray_'
import type {
  ArrayType,
  ValueType,
  ObjectType,
  SetType,
  MapType,
  KeyType,
} from 'types'

const fromMapping = {
  Array: (array: ArrayType): Array<[number, mixed]> =>
    array.reduce(
      (
        pairs: Array<[number, mixed]>,
        value: mixed,
        index: number,
      ): Array<[number, mixed]> => [...pairs, [index, value]],
      [],
    ),
  Object: (object: ObjectType<>): Array<[string, mixed]> =>
    Object.entries(object),
  Set: (set: SetType): Array<[void, mixed]> =>
    fromIteratorToArray_(set.values()).map(
      (value: mixed): [void, mixed] => [undefined, value],
    ),
  Map: (map: MapType): Array<[KeyType, mixed]> =>
    fromIteratorToArray_(map.entries()),
}

//type pairableValue= ArrayType<> | ObjectType<> | SetType<> | MapType<>
type pairableValue =
  | Array<mixed>
  | {[key: string]: mixed}
  | Set<mixed>
  | Map<mixed, mixed>

export default function toPairs_(
  pairableObj: pairableValue,
): Array<[?KeyType, ?ValueType]> {
  // eslint-disable-line no-redeclare
  if (fromMapping[type_(pairableObj)]) {
    return fromMapping[type_(pairableObj)](pairableObj)
  }
  throw new Error(`toPairs doesn't know how to handle ${type_(pairableObj)}`)
}
