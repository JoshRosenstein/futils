 // ROSEYS TS

export declare var concat_: Concat_
export declare var concat: Concat
export default concat

export declare type Concat_ = {
  (a: string, b: string): concat_string_11;
  <T, U>(a: T[], b: U[]): concat_list_11<T, U>;
  <T, U>(a: T[] | string, b: U[] | string): concat_mixed_11<T, U>;
  }
  export declare type Concat ={
    (a: string): concat_string_10;
    <T>(a: T[]): concat_list_10<T>;
    <T>(a: T[] | string): concat_mixed_10<T>;
    (a: string, b: string): concat_string_11;
    <T, U>(a: T[], b: U[]): concat_list_11<T, U>;
    <T, U>(a: T[] | string, b: U[] | string): concat_mixed_11<T, U>;
    }

type concat_string_10 = {
    (b: string): concat_string_11;
};
type concat_list_10<T> = {
    <U>(b: U[]): concat_list_11<T, U>;
};
type concat_mixed_10<T> = {
    <U>(b: U[] | string): concat_mixed_11<T, U>;
};
type concat_string_11 = string;
type concat_list_11<T, U> = Array<T | U>;
type concat_mixed_11<T, U> = Array<T | U> | string;
