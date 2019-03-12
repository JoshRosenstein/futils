import {constructN_} from './constructN'
import {Constructor} from './_types/ts/$types'

export const construct_ = (Func: (...a: any[]) => any) =>
  //@ts-ignore
  constructN_(Func.length, Func as Constructor<any>)
export const construct = construct_
export default construct
