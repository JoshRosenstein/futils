import { NonNull, Key } from './_types/remeda';
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
declare type Pathable<T> = {
    [K in AllKeys<T>]: TypesForKey<T, K>;
};
declare type AllKeys<T> = T extends infer I ? I extends string | number ? never : keyof I : never;
declare type TypesForKey<T, K extends Key> = T extends infer I ? K extends keyof I ? I[K] : never : never;
/**
 * Given some `A` which is a key of at least one variant of `T`, derive
 * `T[A]` for the cases where `A` is present in `T`, and `T[A]` is not
 * null or undefined.
 */
declare type PathValue1<T, A extends keyof Pathable<T>> = NonNull<Pathable<T>>[A];
/** All possible options after successfully reaching `T[A]` */
declare type Pathable1<T, A extends keyof Pathable<T>> = Pathable<PathValue1<T, A>>;
/** As `PathValue1`, but for `T[A][B]` */
declare type PathValue2<T, A extends keyof Pathable<T>, B extends keyof Pathable1<T, A>> = NonNull<Pathable1<T, A>>[B];
/** As `Pathable1`, but for `T[A][B]` */
declare type Pathable2<T, A extends keyof Pathable<T>, B extends keyof Pathable1<T, A>> = Pathable<PathValue2<T, A, B>>;
/** As `PathValue1`, but for `T[A][B][C]` */
declare type PathValue3<T, A extends keyof Pathable<T>, B extends keyof Pathable1<T, A>, C extends keyof Pathable2<T, A, B>> = NonNull<Pathable2<T, A, B>>[C];
/**
 * Gets the value at `path` of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place.
 * @param object the target object
 * @param path the path of the property to get
 * @param defaultValue the default value
 * @signature R.pathOrObj(object, array, defaultValue)
 * @example
 *    R.pathOrObj({x: 10}, ['y'], 2) // 2
 *    R.pathOrObj({y: 10}, ['y'], 2) // 10
 * @data_first
 * @category Object
 */
export declare function pathOrObj<T, A extends keyof Pathable<T>>(object: T, path: [A], defaultValue: PathValue1<T, A>): PathValue1<T, A>;
export declare function pathOrObj<T, A extends keyof Pathable<T>, B extends keyof Pathable1<T, A>>(object: T, path: [A, B], defaultValue: PathValue2<T, A, B>): PathValue2<T, A, B>;
export declare function pathOrObj<T, A extends keyof Pathable<T>, B extends keyof Pathable1<T, A>, C extends keyof Pathable2<T, A, B>>(object: T, path: [A, B, C], defaultValue: PathValue3<T, A, B, C>): PathValue3<T, A, B, C>;
/**
 * Gets the value at `path` of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place.
 * @param object the target object
 * @param path the path of the property to get
 * @param defaultValue the default value
 * @signature R.pathOrObj(array, defaultValue)(object)
 * @example
 *    R.pipe({x: 10}, R.pathOrObj(['y'], 2)) // 2
 *    R.pipe({y: 10}, R.pathOrObj(['y'], 2)) // 10
 * @data_last
 * @category Object
 */
export declare function pathOrObj<T, A extends keyof Pathable<T>>(path: [A], defaultValue: PathValue1<T, A>): (object: T) => PathValue1<T, A>;
export declare function pathOrObj<T, A extends keyof Pathable<T>, B extends keyof Pathable1<T, A>>(path: [A, B], defaultValue: PathValue2<T, A, B>): (object: T) => PathValue2<T, A, B>;
export declare function pathOrObj<T, A extends keyof Pathable<T>, B extends keyof Pathable1<T, A>, C extends keyof Pathable2<T, A, B>>(path: [A, B, C], defaultValue: PathValue3<T, A, B, C>): (object: T) => PathValue3<T, A, B, C>;
export declare const ttt: number | {
    b: {
        c: number;
        d?: number | undefined;
    };
    z?: number | undefined;
};
export declare const t: number | {
    b: {
        c: number;
        d?: number | undefined;
    };
    z?: number | undefined;
};
export declare const tf: number | {
    c: number;
    d?: number | undefined;
};
export {};
