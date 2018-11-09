type PredicateFunctionTypeWithKeyT<T> = ((a: T, b: PropertyKey) => boolean)

export type Any_ = <T>(
  predicateFn: PredicateFunctionTypeWithKeyT<T>,
  functor: any,
) => boolean

export type Any = Any_ & {
  <T>(predicateFn: (value: T, key?: PropertyKey) => boolean): (
    functor: any,
  ) => boolean
}
