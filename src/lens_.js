import mapValues_ from './mapValues_'

export default (getter, setter) => toFunctorFn => target =>
  mapValues_(v => setter(v, target), toFunctorFn(getter(target)))
