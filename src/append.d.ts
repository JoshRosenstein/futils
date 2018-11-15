 // ROSEYS TS
import {Property} from './_types/ts/$types'


export declare var append_: Append_
export declare var append: Append
export default append


type ReturnPropIterable<O,V> =
O extends Array<infer E> ? Array<E |V> :
//O extends string|number ? string:
undefined

export declare type Append_={
  <V extends string|number,O extends number|string>(value:V, orderedList:O):string
  <V,O extends Array<any> >(value:V, orderedList:O): ReturnPropIterable<O,V>
}

export declare type Append={
  <V extends string|number,O extends number|string>(value:V, orderedList:O):string
  <V,O extends Array<any> >(value:V, orderedList:O): ReturnPropIterable<O,V>

  <V>(value:V): <O = Array<any>>(orderedList:O)=> ReturnPropIterable<O,V>
  <V = string|number>(value:V):<O = number|string>( orderedList:O)=>string

}
