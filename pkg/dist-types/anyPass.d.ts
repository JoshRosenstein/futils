declare type AnyPass_ = <T>(fns: Array<(...args: T[]) => boolean>, ...args: T[]) => boolean;
declare type AnyPass = (<T>(fns: Array<(...args: T[]) => boolean>) => (...args: T[]) => boolean) & AnyPass_;
export declare const anyPass_: AnyPass_;
export declare const anyPass: AnyPass;
export default anyPass;
