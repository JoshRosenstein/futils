import { purry } from './purry';

export type NonNull<T, M extends boolean = true> = M extends true
  ? T
  : { [K in keyof T]-?: NonNullable<T[K]> };

export type WrapNull<T, R> = T extends null | undefined ? R | undefined : R;

/**
 * Given a union of indexable types `T`, we derive an indexable type
 * containing all of the keys of each variant of `T`. If a key is
 * present in multiple variants of `T`, then the corresponding type in
 * `Pathable<T>` will be the intersection of all types for that key.
 * @example
 *    type T1 = Pathable<{a: number} | {a: string; b: boolean}>
 *    // {a: number | string; b: boolean}
 *
 *    type T2 = Pathable<{a?: {b: string}}
 *    // {a: {b: string} | undefined}
 *
 *    type T3 = Pathable<{a: string} | number>
 *    // {a: string}
 *
 *    type T4 = Pathable<{a: number} | {a: string} | {b: boolean}>
 *    // {a: number | string; b: boolean}
 *
 * This type lets us answer the questions:
 * - Given some object of type `T`, what keys might this object have?
 * - If this object did happen to have a particular key, what values
 *   might that key have?
 */
type Pathable<
  T,
  END extends boolean = false,
  NONNULL = NonNullable<T>
> = END extends true
  ? { [K in keyof NONNULL]: NONNULL[K] }
  : { [K in AllKeys<T>]: TypesForKey<T, K> };

type AllKeys<T> = T extends infer I
  ? I extends string | number
    ? never
    : keyof I
  : never;
type TypesForKey<T, K extends string | number> = T extends infer I
  ? K extends keyof I
    ? I[K]
    : never
  : never;

/**
 * Given some `A` which is a key of at least one variant of `T`, derive
 * `T[A]` for the cases where `A` is present in `T`, and `T[A]` is not
 * null or undefined.
 */
type PathValue1<
  T,
  A extends keyof Pathable<T, M>,
  M extends boolean = false
> = WrapNull<T, NonNull<Pathable<T, M>, M>[A]>;

/** All possible options after successfully reaching `T[A]` */
type Pathable1<
  T,
  A extends keyof Pathable<T, M>,
  M extends boolean = false
> = Pathable<PathValue1<T, A, M>, M>;

/** As `PathValue1`, but for `T[A][B]` */
type PathValue2<
  T,
  A extends keyof Pathable<T, M>,
  B extends keyof Pathable1<T, A, M>,
  M extends boolean = false
> = WrapNull<PathValue1<T, A, M>, NonNull<Pathable1<T, A, M>, M>[B]>;
/** As `Pathable1`, but for `T[A][B]` */
type Pathable2<
  T,
  A extends keyof Pathable<T, M>,
  B extends keyof Pathable1<T, A, M>,
  M extends boolean = false
> = Pathable<PathValue2<T, A, B, M>, M>;

/** As `PathValue1`, but for `T[A][B][C]` */
type PathValue3<
  T,
  A extends keyof Pathable<T, M>,
  B extends keyof Pathable1<T, A, M>,
  C extends keyof Pathable2<T, A, B, M>,
  M extends boolean = false
> = WrapNull<PathValue2<T, A, B, M>, NonNull<Pathable2<T, A, B, M>, M>[C]>;

/**
 * Gets the value at `path` of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place.
 * @param object the target object
 * @param path the path of the property to get
 * @param defaultValue the default value
 * @signature R.pathObj(object, array, defaultValue)
 * @example
 *    R.pathObj({x: 10}, ['y'], 2) // 2
 *    R.pathObj({y: 10}, ['y'], 2) // 10
 * @data_first
 * @category Object
 */
export function pathObj<T, A extends keyof Pathable<T, true>>(
  object: T,
  path: [A],
): PathValue1<T, A, true>;

export function pathObj<
  T,
  A extends keyof Pathable<T, true>,
  B extends keyof Pathable1<T, A, true>
>(object: T, path: [A, B]): PathValue2<T, A, B, true>;

export function pathObj<
  T,
  A extends keyof Pathable<T, true>,
  B extends keyof Pathable1<T, A, true>,
  C extends keyof Pathable2<T, A, B, true>
>(object: T, path: [A, B, C]): PathValue3<T, A, B, C, true>;

/**
 * Gets the value at `path` of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place.
 * @param object the target object
 * @param path the path of the property to get
 * @param defaultValue the default value
 * @signature R.pathObj(array, defaultValue)(object)
 * @example
 *    R.pipe({x: 10}, R.pathObj(['y'], 2)) // 2
 *    R.pipe({y: 10}, R.pathObj(['y'], 2)) // 10
 * @data_last
 * @category Object
 */
export function pathObj<T, A extends keyof Pathable<T>>(
  path: [A],
): (object: T) => PathValue1<T, A>;

export function pathObj<
  T,
  A extends keyof Pathable<T>,
  B extends keyof Pathable1<T, A>
>(path: [A, B]): (object: T) => PathValue2<T, A, B>;

export function pathObj<
  T,
  A extends keyof Pathable<T>,
  B extends keyof Pathable1<T, A>,
  C extends keyof Pathable2<T, A, B>
>(path: [A, B, C]): (object: T) => PathValue3<T, A, B, C>;

export function pathObj() {
  return purry(_pathObj, arguments);
}

function _pathObj(object: any, path: any[]): any {
  let current = object;
  for (const prop of path) {
    if (current == null || current[prop] == null) {
      return undefined;
    }
    current = current[prop];
  }
  return current;
}
