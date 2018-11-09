export type Round_ = (a: number, b: number) => number
export type Round = {
  (a: number): (b: number) => number
} & Round_
