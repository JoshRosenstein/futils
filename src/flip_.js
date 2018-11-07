// @flow
import curry from './curry'
//import type {Curried2, Curried3, Curried4, Curried5, Curried6} from 'types'

type Flip_ = (<T1, T2, R>(fn: (v1: T1, v2: T2) => R) => Curried2<T2, T1, R>) &
  (<T1, T2, T3, R>(
    fn: (v1: T1, v2: T2, v3: T3) => R,
  ) => Curried3<T2, T1, T3, R>) &
  (<T1, T2, T3, T4, R>(
    fn: (v1: T1, v2: T2, v3: T3, v4: T4) => R,
  ) => Curried4<T2, T1, T3, T4, R>) &
  (<T1, T2, T3, T4, T5, R>(
    fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R,
  ) => Curried5<T2, T1, T3, T4, T5, R>) &
  (<T1, T2, T3, T4, T5, T6, R>(
    fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R,
  ) => Curried6<T2, T1, T3, T4, T5, T6, R>) &
  (<T1, T2, R>(
    fn: (v1: T1, v2: T2, ...args: Array<mixed>) => R,
  ) => (v2: T2, v1: T1, ...args: Array<mixed>) => R)

const flip_: Flip_ = fn => curry((x, y, ...args) => fn(y, x, ...args))

export default flip_

// @flow
// prettier-ignore
type Curried1<A1, R> =
  (()=> Curried1<A1, R>) &
  ((a1: A1, ...args: any[])=> R)

// prettier-ignore
type Curried2<A1, A2, R> =
  (()=> Curried2<A1, A2, R>) &
  ((a1: A1)=> Curried1<A2, R>) &
  ((a1: A1, a2: A2, ...args: any[])=> R)

// prettier-ignore
type Curried3<A1, A2, A3, R> =
  (()=> Curried3<A1, A2, A3, R>) &
  ((a1: A1)=> Curried2<A2, A3, R>) &
  ((a1: A1, a2: A2)=> Curried1<A3, R>) &
  ((a1: A1, a2: A2, a3: A3, ...args: any[])=> R)

// prettier-ignore
type Curried4<A1, A2, A3, A4, R> =
  (()=> Curried4<A1, A2, A3, A4, R>) &
  ((a1: A1)=> Curried3<A2, A3, A4, R>) &
  ((a1: A1, a2: A2)=> Curried2<A3, A4, R>) &
  ((a1: A1, a2: A2, a3: A3)=> Curried1<A4, R>) &
  ((a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[])=> R)

// prettier-ignore
type Curried5<A1, A2, A3, A4, A5, R> =
  (()=> Curried5<A1, A2, A3, A4, A5, R>) &
  ((a1: A1)=> Curried4<A2, A3, A4, A5, R>) &
  ((a1: A1, a2: A2)=> Curried3<A3, A4, A5, R>) &
  ((a1: A1, a2: A2, a3: A3)=> Curried2<A4, A5, R>) &
  ((a1: A1, a2: A2, a3: A3, a4: A4)=> Curried1<A5, R>) &
  ((a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, ...args: any[])=> R)

// prettier-ignore
type Curried6<A1, A2, A3, A4, A5,A6, R> =
  (()=> Curried6<A1, A2, A3, A4, A5,A6, R>) &
  ((a1: A1)=> Curried5<A2, A3, A4, A5,A6, R>) &
  ((a1: A1, a2: A2)=> Curried4<A3, A4, A5,A6, R>) &
  ((a1: A1, a2: A2, a3: A3)=> Curried3<A4, A5,A6, R>) &
  ((a1: A1, a2: A2, a3: A3, a4: A4)=> Curried2<A5,A6, R>) &
  ((a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => Curried1<A6, R>) &
  ((a1: A1, a2: A2, a3: A3, a4: A4, a5: A5,a6: A6, ...args: any[])=> R)
