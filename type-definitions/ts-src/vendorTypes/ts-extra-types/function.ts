export type Ctor<Instance = any, A extends any[] = any[]> = { new(...args: A): Instance };
export type Func<Return = any, A extends any[] = any[]> = (...args: A) => Return;

export type ArgTypes<F> =
    F extends Func<any, infer T> ? T :
    F extends Ctor<any, infer U> ? U :
    F extends Function ? any[] : never;

export type Args<F> = ArgTypes<F>;

export type ArgCount<F> =
    ArgTypes<F> extends infer A
    ? (A extends any[] ? A["length"] : never)
    : never;