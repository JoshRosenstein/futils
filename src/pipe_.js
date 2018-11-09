// flow
const pipe = (...fns) =>
  fns.reduceRight((f, g) => (...args) => f(g(...args)), arg => arg)

export default pipe

// type UnaryFn<A, R> = (a: A) => R

// // prettier-ignore
// type pipeT=(<A, B, C, D, E, F, G>(
//   ab: UnaryFn<A, B>,
//   bc: UnaryFn<B, C>,
//   cd: UnaryFn<C, D>,
//   de: UnaryFn<D, E>,
//   ef: UnaryFn<E, F>,
//   fg: UnaryFn<F, G>,
// ) => UnaryFn<A, G>) &
//   (<A, B, C, D, E, F>(
//     ab: UnaryFn<A, B>,
//     bc: UnaryFn<B, C>,
//     cd: UnaryFn<C, D>,
//     de: UnaryFn<D, E>,
//     ef: UnaryFn<E, F>,
//   ) => UnaryFn<A, F>) &
//   (<A, B, C, D, E>(
//     ab: UnaryFn<A, B>,
//     bc: UnaryFn<B, C>,
//     cd: UnaryFn<C, D>,
//     de: UnaryFn<D, E>,
//   ) => UnaryFn<A, E>) &
//   (<A, B, C, D>(
//     ab: UnaryFn<A, B>,
//     bc: UnaryFn<B, C>,
//     cd: UnaryFn<C, D>,
//   ) => UnaryFn<A, D>) &
//   (<A, B, C>(
//     ab: UnaryFn<A, B>,
//     bc: UnaryFn<B, C>,
//   ) => UnaryFn<A, C>) &
//   (<A, B>(ab: UnaryFn<A, B>) => UnaryFn<A, B>)
