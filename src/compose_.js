// @flow
import type {UnaryFn} from 'types'
import pipe_ from './pipe_'

/**
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 *
 */

const compose_: ((end: void) => <T>(x: T) => T) &
  (<A, B>(m1: UnaryFn<A, B>, end: void) => UnaryFn<A, B>) &
  (<A, B, C>(
    m1: UnaryFn<B, C>,
    m2: UnaryFn<A, B>,
    end: void,
  ) => UnaryFn<A, C>) &
  (<A, B, C, D>(
    m1: UnaryFn<C, D>,
    m2: UnaryFn<B, C>,
    m3: UnaryFn<A, B>,
    end: void,
  ) => UnaryFn<A, D>) &
  (<A, B, C, D, E>(
    m1: UnaryFn<D, E>,
    m2: UnaryFn<C, D>,
    m3: UnaryFn<B, C>,
    m4: UnaryFn<A, B>,
    end: void,
  ) => UnaryFn<A, E>) &
  (<A, B, C, D, E, F>(
    m1: UnaryFn<E, F>,
    m2: UnaryFn<D, E>,
    m3: UnaryFn<C, D>,
    m4: UnaryFn<B, C>,
    m5: UnaryFn<A, B>,
    end: void,
  ) => UnaryFn<A, F>) &
  (<A, B, C, D, E, F, G>(
    m1: UnaryFn<F, G>,
    m2: UnaryFn<E, F>,
    m3: UnaryFn<D, E>,
    m4: UnaryFn<C, D>,
    m5: UnaryFn<B, C>,
    m6: UnaryFn<A, B>,
    end: void,
  ) => UnaryFn<A, G>) &
  (<A, B, C, D, E, F, G, H>(
    m1: UnaryFn<G, H>,
    m2: UnaryFn<F, G>,
    m3: UnaryFn<E, F>,
    m4: UnaryFn<D, E>,
    m5: UnaryFn<C, D>,
    m6: UnaryFn<B, C>,
    m7: UnaryFn<A, B>,
    end: void,
  ) => UnaryFn<A, H>) &
  (<A, B, C, D, E, F, G, H, J>(
    m1: UnaryFn<G, J>,
    m2: UnaryFn<G, H>,
    m3: UnaryFn<F, G>,
    m4: UnaryFn<E, F>,
    m5: UnaryFn<D, E>,
    m6: UnaryFn<C, D>,
    m7: UnaryFn<B, C>,
    m8: UnaryFn<A, B>,
    end: void,
  ) => UnaryFn<A, J>) &
  (<A, B, C, D, E, F, G, H, J, K>(
    m1: UnaryFn<J, K>,
    m2: UnaryFn<G, J>,
    m3: UnaryFn<G, H>,
    m4: UnaryFn<F, G>,
    m5: UnaryFn<E, F>,
    m6: UnaryFn<D, E>,
    m7: UnaryFn<C, D>,
    m8: UnaryFn<B, C>,
    m9: UnaryFn<A, B>,
    end: void,
  ) => UnaryFn<A, K>) &
  (<A, B, C, D, E, F, G, H, J, K, L>(
    m1: UnaryFn<K, L>,
    m2: UnaryFn<J, K>,
    m3: UnaryFn<G, J>,
    m4: UnaryFn<G, H>,
    m5: UnaryFn<F, G>,
    m6: UnaryFn<E, F>,
    m7: UnaryFn<D, E>,
    m8: UnaryFn<C, D>,
    m9: UnaryFn<B, C>,
    m10: UnaryFn<A, B>,
    end: void,
  ) => UnaryFn<A, L>) &
  (<A, R>(...funcs: Array<UnaryFn<A, R>>) => UnaryFn<A, R>) = ((...funcs) =>
  pipe_.apply(this, funcs.reverse()): any)

export default compose_
