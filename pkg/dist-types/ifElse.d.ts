import { Morphism, Predicate } from './_types/$types';
export declare type IfElse_ = {
    <T, U, V>(pred: Predicate<T>, onTrue: Morphism<T, U>, onFalse: Morphism<T, V>, value: T): U | V;
};
export declare type IfElse = {
    <T>(pred: Predicate<T>): ifElse_100<T>;
    <T, U>(pred: Predicate<T>, onTrue: Morphism<T, U>): ifElse_110<T, U>;
    <T, U, V>(pred: Predicate<T>, onTrue: Morphism<T, U>, onFalse: Morphism<T, V>): ifElse_111<T, U, V>;
    <T, U, V>(pred: Predicate<T>, onTrue: Morphism<T, U>, onFalse: Morphism<T, V>, value: T): U | V;
};
declare type ifElse_100<T> = {
    <U>(onTrue: Morphism<T, U>): ifElse_110<T, U>;
    <U, V>(onTrue: Morphism<T, U>, onFalse: Morphism<T, V>): ifElse_111<T, U, V>;
};
declare type ifElse_110<T, U> = {
    <V>(onFalse: Morphism<T, V>): ifElse_111<T, U, V>;
};
declare type ifElse_111<T, U, V> = Morphism<T, U | V>;
export declare const ifElse_: IfElse_;
export declare const ifElse: IfElse;
export default ifElse;
