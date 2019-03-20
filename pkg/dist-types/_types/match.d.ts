declare type DoMatchNames<T, L> = {
    [K in keyof T]: T[K] extends L ? K : never;
}[keyof T];
declare type NotMatchNames<T, L> = {
    [K in keyof T]: T[K] extends L ? never : K;
}[keyof T];
export declare type MatchNames<T, L, M extends boolean = true> = M extends true ? DoMatchNames<T, L> : NotMatchNames<T, L>;
export declare type Match<T, L, M extends boolean = true> = Pick<T, MatchNames<T, L, M>>;
export {};
