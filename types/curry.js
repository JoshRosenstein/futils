// @flow
// prettier-ignore
export type Curried1<A1, R> =
  (()=> Curried1<A1, R>) &
  ((a1: A1, ...args: any[])=> R)

// prettier-ignore
export type Curried2<A1, A2, R> =
  (()=> Curried2<A1, A2, R>) &
  ((a1: A1)=> Curried1<A2, R>) &
  ((a1: A1, a2: A2, ...args: any[])=> R)

// prettier-ignore
export type Curried3<A1, A2, A3, R> =
  (()=> Curried3<A1, A2, A3, R>) &
  ((a1: A1)=> Curried2<A2, A3, R>) &
  ((a1: A1, a2: A2)=> Curried1<A3, R>) &
  ((a1: A1, a2: A2, a3: A3, ...args: any[])=> R)

// prettier-ignore
export type Curried4<A1, A2, A3, A4, R> =
  (()=> Curried4<A1, A2, A3, A4, R>) &
  ((a1: A1)=> Curried3<A2, A3, A4, R>) &
  ((a1: A1, a2: A2)=> Curried2<A3, A4, R>) &
  ((a1: A1, a2: A2, a3: A3)=> Curried1<A4, R>) &
  ((a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[])=> R)

// prettier-ignore
export type Curried5<A1, A2, A3, A4, A5, R> =
  (()=> Curried5<A1, A2, A3, A4, A5, R>) &
  ((a1: A1)=> Curried4<A2, A3, A4, A5, R>) &
  ((a1: A1, a2: A2)=> Curried3<A3, A4, A5, R>) &
  ((a1: A1, a2: A2, a3: A3)=> Curried2<A4, A5, R>) &
  ((a1: A1, a2: A2, a3: A3, a4: A4)=> Curried1<A5, R>) &
  ((a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, ...args: any[])=> R)

// prettier-ignore
export type Curried6<A1, A2, A3, A4, A5,A6, R> =
  (()=> Curried6<A1, A2, A3, A4, A5,A6, R>) &
  ((a1: A1)=> Curried5<A2, A3, A4, A5,A6, R>) &
  ((a1: A1, a2: A2)=> Curried4<A3, A4, A5,A6, R>) &
  ((a1: A1, a2: A2, a3: A3)=> Curried3<A4, A5,A6, R>) &
  ((a1: A1, a2: A2, a3: A3, a4: A4)=> Curried2<A5,A6, R>) &
  ((a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => Curried1<A6, R>) &
  ((a1: A1, a2: A2, a3: A3, a4: A4, a5: A5,a6: A6, ...args: any[])=> R)
