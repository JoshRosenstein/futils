export declare type And_ = <T extends {
    and?: (...a: any[]) => any;
} | number | boolean | string | null>(fn1: T, val2: any) => boolean;
export declare type And = And_ & (<T extends {
    and?: (...a: any[]) => any;
} | number | boolean | string | null>(fn1: T) => (val2: any) => boolean);
export declare const and_: And_;
export declare const and: And;
export default and;
