import flip_ from "./flip_";
import append_ from "./append_";
import reduceValues_ from "./reduceValues_";


export default functor => reduceValues_((l,r)=>append_(r,l),[],functor)
