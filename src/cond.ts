import {purry} from './purry'

/**
 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 * @param fns
 * @param data
 * @signature
 *    F.cond(fns)(data)
 * @example
 *
 *      const fn = F.cond([
 *        [F.equals(0),   F.always('water freezes at 0°C')],
 *        [F.equals(100), F.always('water boils at 100°C')],
 *        [F.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 *
 * @pipeable
 * @data_last
 * @category Logic
 *
 */

export function cond<R>(fns: Array<[() => boolean, () => R]>): () => R
export function cond<T1, R>(
  fns: Array<[(v1: T1) => boolean, (v1: T1) => R]>,
): (v1: T1) => R

export function cond<T1, T2, R>(
  fns: Array<[(v1: T1, v2: T2) => boolean, (v1: T1, v2: T2) => R]>,
): (v1: T1, v2: T2) => R

export function cond<T1, T2, T3, R>(
  fns: Array<
    [(v1: T1, v2: T2, v3: T3) => boolean, (v1: T1, v2: T2, v3: T3) => R]
  >,
): (v1: T1, v2: T2, v3: T3) => R

export function cond<T1, T2, T3, T4, R>(
  fns: Array<
    [
      (v1: T1, v2: T2, v3: T3, v4: T4) => boolean,
      (v1: T1, v2: T2, v3: T3, v4: T4) => R
    ]
  >,
): (v1: T1, v2: T2, v3: T3, v4: T4) => R

export function cond<T1, T2, T3, T4, T5, R>(
  fns: Array<
    [
      (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => boolean,
      (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R
    ]
  >,
): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R

export function cond<T1, T2, T3, T4, T5, T6, R>(
  fns: Array<
    [
      (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => boolean,
      (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R
    ]
  >,
): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R

export function cond(fns: any): (...args: any[]) => any

export function cond() {
  return purry(cond_, arguments)
}

export function cond_<T1, R>(
  data: T1,
  conds: Array<[(v1: T1) => boolean, (v1: T1) => R]>,
) {
  return conds.length
    ? conds[0][0](data)
      ? conds[0][1](data)
      : cond_(data, conds.slice(1))
    : undefined
}

export default cond
