import {Not} from "./logic";
import {Infer, IsExact} from "./types";

export type Assert<T extends true> = true;
export type AssertFalse<T extends false> = true;
export type AssertExtends<T extends U, U> = true;
export type AssertNotExtends<T extends T1, U, T1 = Exclude<T, U>> = Not<IsExact<T, U>>;
export type AssertExact<T extends U1, U extends T1, T1 = Infer<T>, U1 = Infer<U>> = IsExact<T, U>;