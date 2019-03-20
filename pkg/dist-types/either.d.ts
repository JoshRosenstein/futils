import { Variadic } from './_types/$types';
export declare type Either_ = {
    <F extends Variadic<boolean>>(fn1: F, fn2: F): either_11<F>;
    <T1, T2>(fn1: T1, fn2: T2): T1 | T2;
};
export declare type Either = {
    <F extends Variadic<boolean>>(fn1: F): either_10<F>;
    <F extends Variadic<boolean>>(fn1: F, fn2: F): either_11<F>;
    <T1, T2>(fn1: T1, fn2: T2): T1 | T2;
    <T1, T2>(fn1: T1): (fn2: T2) => T1 | T2;
};
declare type either_10<F extends Variadic<boolean>> = {
    (fn2: F): either_11<F>;
};
declare type either_11<F extends Variadic<boolean>> = F;
export declare const either_: Either_;
export declare const either: Either;
export default either;
