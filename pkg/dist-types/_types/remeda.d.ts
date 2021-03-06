export declare type Pred<T, K> = (input: T) => K;
export declare type PredIndexed<T, K> = (input: T, index: number, array: T[]) => K;
export declare type PredIndexedOptional<T, K> = (input: T, index?: number, array?: T[]) => K;
/** types that may be returned by `keyof` */
export declare type Key = string | number | symbol;
/** Mapped type to remove optional, null, and undefined from all props */
export declare type NonNull<T> = {
    [K in keyof T]-?: Exclude<T[K], null | undefined>;
};
