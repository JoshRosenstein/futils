 // ROSEYS TS
import {Variadic} from './_types/ts/$types'

type anyPass_1<F extends Variadic<boolean>> = F;

export declare type AnyPass_ = {
  <F extends Variadic<boolean>>(fns: F[]): F;
}
export declare type AnyPass =AnyPass_

export declare var anyPass_: AnyPass_
export declare var anyPass: AnyPass
export default anyPass
