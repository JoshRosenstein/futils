import {Func} from "./function";

export type Primitive = string | number | boolean | undefined | null | symbol;

type TypeNameMap = {
    function: Function;
    object: null | object;
    string: string;
    number: number;
    boolean: boolean;
    symbol: symbol;
    undefined: undefined;
};

export type TypeName<T = any> =
    T extends Function ? "function" :
    { [P in keyof TypeNameMap]: T extends TypeNameMap[P] ? P : never }[keyof TypeNameMap];

export type ExtractByTypeName<T, Type extends TypeName> =
    T extends Function ? ("function" extends Type ? T : never) :
    T extends TypeNameMap[Type] ? T : never;

export type TypeGuard<U extends V = V, V = any, R extends any[] = any[]> = (arg: V, ...rest: R) => arg is U;

export type GuardedType<T extends Func> = T extends TypeGuard<infer R> ? R : never;

export type IsExact<T, U> = [T, U] extends [U, T] ? true : false;
export type IsExtends<T, U> = T extends U ? true : false;

export type Infer<T> = [T] extends [infer R] ? R : never;

export type Widen<T> =
    T extends boolean ? boolean :
    T extends number ? number :
    T extends symbol ? symbol :
    T extends string ? string :
    T;

export type Wrap<T> =
    T extends boolean ? Boolean :
    T extends number ? Number :
    T extends symbol ? Symbol :
    T extends string ? String :
    T;