export type Assign<T, K> = Pick<T, Exclude<keyof T, keyof K>> & K;

export const b= {a:1,b:"2" }

