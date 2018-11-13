 // ROSEYS TS
import {Variadic} from './_types/ts/$types'

export declare type Either_ = {
  <F extends Variadic<boolean>>(fn1: F, fn2: F): either_11<F>
}
export declare type Either ={
  <F extends Variadic<boolean>>(fn1: F): either_10<F>
  <F extends Variadic<boolean>>(fn1: F, fn2: F): either_11<F>
}
export declare var either_: Either_
export declare var either: Either
export default either


type either_10<F extends Variadic<boolean>> = {
  (fn2: F): either_11<F>;
};
type either_11<F extends Variadic<boolean>> = F;
