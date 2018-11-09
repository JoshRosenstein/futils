export type Divide_ = {(a: number, b: number): number}

export interface Divide extends Divide_ {
  (a: number): (b: number) => number
}
