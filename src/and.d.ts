// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/600f91ec2b830ca075434067ff9ef9df5a16059e/types/ramda/index.d.ts#L497
export declare type And_ = {<T extends { and?: ((...a: any[]) => any); } | number | boolean | string | null>(fn1: T, val2: any): boolean}

export type And = {
  <T extends { and?: ((...a: any[]) => any); } | number | boolean | string | null>(fn1: T): (val2: any) => boolean;
} & And_

export declare var and_: And_
export declare var and: And
export default and

