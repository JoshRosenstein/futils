export declare type Omit<A extends object, K extends string | number | symbol> = Pick<A, Exclude<keyof A, K>>;
