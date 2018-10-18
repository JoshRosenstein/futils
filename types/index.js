// @flow

export type * from './curried'
export type AccumulatedType = mixed
export type ValueType = mixed
export type NumberType = number
export type MapKeyType = mixed
export type StringType = string
export type TextType = StringType ///bufer ?
export type ArrayKeyType = NumberType
export type ObjectKeyType = StringType
export type KeyType = ObjectKeyType | ArrayKeyType | MapKeyType

export type MapTypeT<K = MapKeyType, V = ValueType> = Map<K, V>
export type MapType = Map<mixed, mixed>

export type SetTypeT<V = ValueType> = Set<V>
export type SetType = Set<mixed>
export type PromiseTypeT<V = ValueType> = Promise<V>

export type ArrayTypeT<V = ValueType> = Array<V>
export type ArrayType = Array<mixed>

export type ListTypeT<V = ValueType> = ArrayTypeT<V> | SetTypeT<V>
export type ListType = ArrayType | SetType

export type ObjectTypeT<K = ObjectKeyType, V = ValueType> = {[key: K]: V}
export type ObjectType = {[key: string]: mixed}

export type RecordTypeT<K = KeyType, V = ValueType> =
  | ObjectTypeT<ObjectKeyType, V>
  | MapTypeT<K, V>

export type RecordType = ObjectType | MapType

export type FunctorTypeT<V = ValueType> =
  | ListTypeT<V>
  | RecordTypeT<>
  | TextType

export type FunctorType = ListType | RecordType | TextType

export type ArrayTreeType = ArrayTypeT<ValueType | FunctorTypeT<>>
export type OrderedEnumerableTypeT<V = ValueType> = Array<V> | string

export type OrderedEnumerableType = ArrayType | string

export type KeyedEnumerableTypeT<V = ValueType> =
  | RecordTypeT<ValueType, V>
  | OrderedEnumerableTypeT<V>

export type KeyedEnumerableType = RecordType | OrderedEnumerableType

export type OrderedFunctorTypeT<V = ValueType> = ArrayTypeT<V> | StringType
export type KeyedFunctorTypeT<V = ValueType> =
  | RecordTypeT<>
  | OrderedFunctorTypeT<V>
export type SetTreeType = Set<ValueType | FunctorType>
export type ObjectTreeType = {[key: ObjectKeyType]: ValueType | FunctorType}
export type MapTreeType = Map<ValueType | FunctorType>
export type ListTreeType = ArrayTreeType | SetTreeType
export type RecordTreeType = ObjectTreeType | MapTreeType
export type TreeType = ListTreeType | RecordTreeType
export type PredicateFunctionTypeT<I = mixed> = I => boolean
export type PredicateFunctionTypeWithKeyT<I = mixed> = (I, KeyType) => boolean
export type PredicateFunctionType = mixed => boolean

export type UnaryFunctionType<I: mixed, O: mixed> = I => O
export type UnfinishedKeyChainType = Array<KeyType | null>
export type UnorderedFunctorTypeT = SetTypeT<> | ObjectTypeT<> | MapTypeT<>

export type PlainObjInput<K, V> = {+[key: K]: V, __proto__: null}
export type StringValuePair<V> = [string, V]
export type NumberValuePair<V> = [number, V]
export type StringKeyObject<V> = {[index: string]: V}
export type NumberKeyObject<V> = {[index: number]: V}

export type Callback = (
  value: any,
  key: number | string,
  collection: any[] | Object,
) => any
export type Iteratee = Callback | Object | any[] | string
export type IterableCollection = any[] | Object | string
