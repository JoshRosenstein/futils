export const identityFunc_ = x => ({value: x, map: f => identityFunc_(f(x))})

export default identityFunc_
