export declare type Assign<T, K> = Pick<T, Exclude<keyof T, keyof K>> & K;
export declare const b: {
    a: number;
    b: string;
};
