import {curry3_} from './_internal/curry3_'
import {prop_} from './prop'
import {defaultTo_} from './defaultTo'

export type PropOr={
<T, U, V>(val: T, p: string, obj: U): V;
<T>(val: T, p: string): <U, V>(obj: U) => V;
<T>(val: T): <U, V>(p: string, obj: U) => V;
}

export const propOr_ = (d, name, keyedFunctor) =>
  defaultTo_(d, prop_(name, keyedFunctor))

export const propOr:PropOr = curry3_(propOr_)
export default propOr
