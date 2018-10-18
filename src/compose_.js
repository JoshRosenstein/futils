// @flow
import type {Fn1} from 'types'

declare function compose<A, B, C>(
  bc: Fn1<B, C>,
  ab: Fn1<A, B>,
  ...rest: Array<void>
): Fn1<A, C>
declare function compose<A, B, C, D>(
  cd: Fn1<C, D>,
  bc: Fn1<B, C>,
  ab: Fn1<A, B>,
  ...rest: Array<void>
): Fn1<A, D>
declare function compose<A, B, C, D, E>(
  de: Fn1<D, E>,
  cd: Fn1<C, D>,
  bc: Fn1<B, C>,
  ab: Fn1<A, B>,
  ...rest: Array<void>
): Fn1<A, E>
declare function compose<A, B, C, D, E, F>(
  ef: Fn1<E, F>,
  de: Fn1<D, E>,
  cd: Fn1<C, D>,
  bc: Fn1<B, C>,
  ab: Fn1<A, B>,
  ...rest: Array<void>
): Fn1<A, F>
declare function compose<A, B, C, D, E, F, G>(
  fg: Fn1<F, G>,
  ef: Fn1<E, F>,
  de: Fn1<D, E>,
  cd: Fn1<C, D>,
  bc: Fn1<B, C>,
  ab: Fn1<A, B>,
  ...rest: Array<void>
): Fn1<A, G>
declare function compose<A, B, C, D, E, F, G, H>(
  gh: Fn1<G, H>,
  fg: Fn1<F, G>,
  ef: Fn1<E, F>,
  de: Fn1<D, E>,
  cd: Fn1<C, D>,
  bc: Fn1<B, C>,
  ab: Fn1<A, B>,
  ...rest: Array<void>
): Fn1<A, H>
declare function compose<A, B, C, D, E, F, G, H, I>(
  hi: Fn1<H, I>,
  gh: Fn1<G, H>,
  fg: Fn1<F, G>,
  ef: Fn1<E, F>,
  de: Fn1<D, E>,
  cd: Fn1<C, D>,
  bc: Fn1<B, C>,
  ab: Fn1<A, B>,
  ...rest: Array<void>
): Fn1<A, I>
declare function compose<A, B, C, D, E, F, G, H, I, J>(
  ij: Fn1<I, J>,
  hi: Fn1<H, I>,
  gh: Fn1<G, H>,
  fg: Fn1<F, G>,
  ef: Fn1<E, F>,
  de: Fn1<D, E>,
  cd: Fn1<C, D>,
  bc: Fn1<B, C>,
  ab: Fn1<A, B>,
  ...rest: Array<void>
): Fn1<A, J>

export default function compose(...fns) {
  return fns.reduce((f, g) => (...args) => f(g(...args)), arg => arg)
}
