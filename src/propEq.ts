import {curry3_} from './_internal/curry3_'
import {prop_} from './prop'
import {equals_} from './equals'

export type PropEq={
  <T>(name: string | number, val: T, obj: any): boolean;
  <T>(name: string | number, val: T): (obj: any) => boolean;
  (name: string | number): {
      <T>(val: T, obj: any): boolean;
      <T>(val: T): (obj: any) => boolean;
  };
}

export const propEq_ = (name, v, obj) => equals_(v, prop_(name, obj))

export const propEq:PropEq = curry3_(propEq_)

export default propEq
