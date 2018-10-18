import identityFunc_ from './identityFunc_'

export default (lens, value, x) => lens(() => identityFunc_(value))(x).value
