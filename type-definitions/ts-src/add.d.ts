export type Add_ = {(a: number, b: number): number}

export interface Add extends Add_ {
  (a: number): (b: number) => number
}
