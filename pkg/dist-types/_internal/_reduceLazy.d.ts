export declare type LazyResult<T> = LazyEmpty | LazyNext<T> | LazyMany<T>;
interface LazyEmpty {
    done: boolean;
    hasNext: false;
    hasMany?: false | undefined;
    next?: undefined;
}
interface LazyNext<T> {
    done: boolean;
    hasNext: true;
    hasMany?: false | undefined;
    next: T;
}
interface LazyMany<T> {
    done: boolean;
    hasNext: true;
    hasMany: true;
    next: T[];
}
export declare function _reduceLazy<T, K>(array: T[], lazy: (item: T, index?: number, array?: T[]) => LazyResult<K>, indexed?: boolean): K[];
export {};
