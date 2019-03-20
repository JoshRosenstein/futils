export declare function decimalPlaces(value: number | string): number;
export declare const round_: (precision: number | undefined, number: number) => number;
export declare const round: Round;
export default round;
export declare type Round = {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
};
