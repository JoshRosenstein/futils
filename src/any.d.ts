 // ROSEYS TS
 import {PredicateWithKey,Property} from './_types/ts/$types'

export declare type Any_ = {
<T>(predicateFn:(value:T,key?:Property)=>boolean,functor:any):boolean
}

export type Any= {
<T>(predicateFn:(value:T,key?:Property)=>boolean,functor:any):boolean
<T>(predicateFn:(value:T,key?:Property)=>boolean):(functor:any)=>boolean
}
export declare var any_: Any_
export declare var any: Any
export default any

