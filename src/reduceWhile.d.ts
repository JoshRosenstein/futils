 // ROSEYS TS
import {IterableValues,IterableKeys} from './_types/ts/$types'



export declare var reduceWhile_: ReduceWhile_
export declare var reduceWhile: ReduceWhile
export default reduceWhile

type GetV<O>=
O extends string? string:
O extends Array<infer V>? V:
O extends {[key:string]:infer V}? V :
O extends IterableValues<infer E> ?  E :
unknown

type GetK<O>=
O extends string? number:
O extends Array<any>? number:
O extends IterableKeys<infer V>?V:
O extends {[key:string]:any}? string :
 unknown

type ReducerFunc1<TResult>= (acc:TResult,value: any,key:any)=>TResult
type ReducerFunc2<F,TResult>= (acc:TResult,value: GetV<F>,key:GetK<F>)=>TResult

type PredFunc1<TResult>= (acc:TResult,value: any,key:any)=>boolean
type PredFunc2<F,TResult>= (acc:TResult,value: GetV<F>,key:GetK<F>)=>boolean



export type Reduce_T0={
  <TResult>(pred:PredFunc1<TResult>,reducer:ReducerFunc1<TResult> ,initial:TResult,functor:any ):TResult
   <F,TResult>(pred:PredFunc2<F,TResult>,reducer:ReducerFunc2<F,TResult> ,initial:TResult,functor:F  ):TResult
 }


 export declare type  ReduceWhile_={
  <TResult>(pred:PredFunc1<TResult>,reducer:ReducerFunc1<TResult> ,initial:TResult,functor:any ):TResult
   <F,TResult>(pred:PredFunc2<F,TResult>,reducer:ReducerFunc2<F,TResult> ,initial:TResult,functor:F  ):TResult
   <T extends Object,K extends string, U>(pred: (accumulator: U, value?: T,key?:K) => boolean, fn: (accumulator: U, value: T,key?:K) =>  U, initial: U, values: Record<K,T>): U

}

export declare type  ReduceWhile= {
  <TResult>(pred:PredFunc1<TResult>,reducer:ReducerFunc1<TResult> ,initial:TResult,functor:any ):TResult
  <F,TResult>(pred:PredFunc2<F,TResult>,reducer:ReducerFunc2<F,TResult> ,initial:TResult,functor:F  ):TResult

  <TResult>(pred:PredFunc1<TResult>,reducer:ReducerFunc1<TResult> ):(initial:TResult)=>(functor:any )=>TResult
  <TResult>(pred:PredFunc1<TResult>,reducer:ReducerFunc1<TResult> ):(initial:TResult,functor:any )=>TResult
  <TResult>(pred:PredFunc1<TResult>,reducer:ReducerFunc1<TResult> ,initial:TResult):(functor:any )=>TResult

  <TResult>(pred:PredFunc1<TResult>):(reducer:ReducerFunc1<TResult> )=>(initial:TResult)=>(functor:any )=>TResult
  <TResult>(pred:PredFunc1<TResult>):(reducer:ReducerFunc1<TResult> )=>(initial:TResult,functor:any )=>TResult
  <TResult>(pred:PredFunc1<TResult>):(reducer:ReducerFunc1<TResult> ,initial:TResult)=>(functor:any )=>TResult


  <F,TResult>(pred:PredFunc2<F,TResult>,reducer:ReducerFunc2<F,TResult> ):(initial:TResult)=>(functor:F )=>TResult
   <F,TResult>(pred:PredFunc2<F,TResult>,reducer:ReducerFunc2<F,TResult> ):(initial:TResult,functor:F )=>TResult
   <F,TResult>(pred:PredFunc2<F,TResult>,reducer:ReducerFunc2<F,TResult> ,initial:TResult):(functor:F )=>TResult

   <F,TResult>(pred:PredFunc2<F,TResult>):(reducer:ReducerFunc2<F,TResult> )=>(initial:TResult)=>(functor:F )=>TResult
   <F,TResult>(pred:PredFunc2<F,TResult>):(reducer:ReducerFunc2<F,TResult> )=>(initial:TResult,functor:F )=>TResult
   <F,TResult>(pred:PredFunc2<F,TResult>):(reducer:ReducerFunc2<F,TResult> ,initial:TResult)=>(functor:F )=>TResult
   <T extends Object,K extends string, U>(pred: (accumulator: U, value?: T,key?:K) => boolean, fn: (accumulator: U, value: T,key?:K) =>  U, initial: U, values: Record<K,T>): U

  }
