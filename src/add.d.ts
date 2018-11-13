export declare type Add_ = {
  (a: number, b: number): number
}
export type Add = {
  (a: number, b: number): number
  (a: number): (b: number) => number
}
export declare var add_: Add_
export declare var add: Add
export default add
