import { Property } from './_types/$types';
export declare type Any_ = <T>(predicateFn: (value: T, key?: Property) => boolean, functor: any) => boolean;
export declare type Any = Any_ & (<T>(predicateFn: (value: T, key?: Property) => boolean) => (functor: any) => boolean);
export declare const any_: Any_;
export declare const any: Any;
export default any;
