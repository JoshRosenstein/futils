import {curry2_} from './_internal/curry2_'
import {path_} from './path'
import {mapValues_} from './mapValues'

export interface Pluck{
  <K extends keyof T, T>(p: K, list: Array<T>): Array<T[K]>;
  <T>(p: number, list: Array<{ [k: number]: T }>): T[];
  <P extends string>(p: P): <T>(list: Array<Record<P, T>>) => T[];
  (p: number): <T>(list: Array<{ [k: number]: T }>) => T[];
  <T>(propOrIndex: string | number, input: any[] | Record<string,any>): T[]
}

export const pluck_ = (p, obj) => mapValues_(x => path_(p, x), obj)

export const pluck:Pluck = curry2_(pluck_)
export default pluck
