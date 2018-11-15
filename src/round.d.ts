 // ROSEYS TS
import {Property} from './_types/ts/$types'

export declare type Round_ = {
(a: number, b: number): number
}
export declare type Round ={
(a: number, b: number): number
(a: number): (b: number) => number
}
export declare var round_: Round_
export declare var round: Round
export default round
  