export declare const when_: When_;
export declare const when: When;
export default when;
import { Morphism, Predicate } from './_types/$types';
export declare type When_ = {
    <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>, value: T): when_111<T, U>;
};
export declare type When = {
    <T>(pred: Predicate<T>): when_100<T>;
    <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>): when_110<T, U>;
    <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>, value: T): when_111<T, U>;
};
declare type when_100<T> = {
    <U>(whenTrueFn: Morphism<T, U>): when_110<T, U>;
    <U>(whenTrueFn: Morphism<T, U>, value: T): when_111<T, U>;
};
declare type when_110<T, U> = {
    (value: T): when_111<T, U>;
};
declare type when_111<T, U> = T | U;
