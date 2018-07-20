import concat_ from './concat_'
import reduce_ from './reduce_'
import mapValues_ from './mapValues_'
import is from './is'

export default (applyF, applyX)=>is('Function',applyF)?(x)=>applyF(x)(applyX(x)):reduce_((acc,f)=>concat_(acc,mapValues_(f,applyX)),[],applyF)
