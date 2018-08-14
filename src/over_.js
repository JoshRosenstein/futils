import identityFunc_ from './identityFunc_'


export  default (lens, fn, x) =>
  lens(y => identityFunc_(fn(y)))(x).value
