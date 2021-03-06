export declare type MorphismWithKey<T, K, U> = (value: T, key: K) => U;
export declare type PredicateWithKey<T, K> = MorphismWithKey<T, K, boolean>;
export interface IterableValues<V> {
    values(): IterableIterator<V>;
}
export interface IterableKeys<K> {
    keys(): IterableIterator<K>;
}
export declare type Property = string | number | symbol;
export declare type Path = List<Property>;
export declare type PropKey = keyof any;
export declare type Constructor<T> = new (...args: any[]) => T;
export declare type Morphism<T, U> = (value: T) => U;
export declare type NestedMorphism<T, U, V> = (value: T) => (value: U) => V;
export declare type IndexedListMorphism<T, U> = (value: T, index: number, list: List<T>) => U;
export declare type IndexedObjectMorphism<T, U, K extends PropKey> = (value: T, index: number, object: Record<K, T>) => U;
export declare type KeyedObjectMorphism<T, U, K extends PropKey> = (value: T, key: K, object: Record<K, T>) => U;
export declare type Tap<T> = (value: T) => void;
export declare type KeyedObjectTap<T, U extends Dictionary<T>> = (value: T, key: string, object: U) => void;
export declare type Predicate<T> = Morphism<T, boolean>;
export declare type Comparator<T, U extends number | boolean> = (a: T, b: T) => U;
export declare type Variadic<R> = (...args: any[]) => R;
export declare type TypedVariadic<T, R> = (...args: T[]) => R;
export declare type ListMapper<T, U> = (fn: Morphism<T, U>, list: List<T>) => U[];
export declare type ObjectMapper<T, U, K extends string> = (fn: Morphism<T, U>, object: Record<K, T>) => Record<K, U>;
export interface KeyValuePair<K, V> extends ArrayLike<K | V> {
    0: K;
    1: V;
}
export declare type List<T> = T[] | ArrayLike<T>;
export declare type NestedList<T> = List<T | List<T> | List<List<T>>>;
export interface Dictionary<T> {
    [key: string]: T;
}
export interface NestedDictionary<T> {
    [key: string]: T | NestedDictionary<T>;
}
export interface Ordered {
    valueOf(): string | number | boolean;
}
export interface Tuple {
    0: any;
    [index: number]: any;
    readonly length: number;
}
export interface ManualLens<T, U> {
    _fake_lens_getter: T;
    _fake_lens_setter: U;
}
export interface PseudoLens<K extends string | number> {
    _fake_lens_prop: K;
}
export interface Transformer<T, U, R> {
    "@@transducer/init"(): U;
    "@@transducer/step"(accumulator: U, value: T): U;
    "@@transducer/result"(accumulator: U): R;
}
export interface Reduced<T> {
    "@@transducer/value": T;
    "@@transducer/reduced": true;
}
export interface Filterable<T> {
    filter(fn: Predicate<T>): Filterable<T>;
}
export interface Functor<T> {
    map<U>(fn: Morphism<T, U>): Functor<U>;
}
export interface Apply<T> extends Functor<T> {
    ap<U>(fn: Apply<Morphism<T, U>>): Apply<U>;
}
export interface Chain<T> extends Apply<T> {
    chain<U>(fn: Morphism<T, Chain<U>>): Chain<U>;
}
export interface Applicative<T> extends Apply<T> {
    of<U>(value: U): Applicative<U>;
}
export interface Foldable<T> {
    reduce<U>(fn: (accumulator: U, value: T) => U, initial: U): U;
}
export interface Traversable<T> extends Functor<T>, Foldable<T> {
    traverse<U, V>(fn: Morphism<T, Applicative<U>>, of: Morphism<V, Applicative<V>>): Applicative<Traversable<U>>;
}
export declare type Simplify<T> = {
    [K in keyof T]: T[K];
};
export declare type Omit<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;
export declare type Overwrite<T, U> = Omit<T, keyof T & keyof U> & U;
