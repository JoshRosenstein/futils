export declare type Func<P extends any[], R> = (...args: P) => R;
export declare type ArgsType<F extends Func<any, any>> = Parameters<F>;
