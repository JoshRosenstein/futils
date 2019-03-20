export declare type DefaultTo_ = {
    <T>(defaults: T, value: null | undefined): defaultTo_void_11<T>;
    <T, U>(defaults: T, value: U | null | undefined): defaultTo_general_11<T, U>;
};
export declare type DefaultTo = {
    <T>(defaults: T): defaultTo_10<T>;
    <T>(defaults: T, value: null | undefined): defaultTo_void_11<T>;
    <T, U>(defaults: T, value: U | null | undefined): defaultTo_general_11<T, U>;
};
declare type defaultTo_10<T> = {
    (value: null | undefined): defaultTo_void_11<T>;
    <U>(value: U | null | undefined): defaultTo_general_11<T, U>;
};
declare type defaultTo_void_11<T> = T;
declare type defaultTo_general_11<T, U> = T | U;
export declare const defaultTo_: DefaultTo_;
export declare const defaultTo: DefaultTo;
export default defaultTo;
