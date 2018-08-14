const IdentityFunc_=(x)=>({value: x, map: f=>IdentityFunc_(f(x))  })
export default IdentityFunc_
