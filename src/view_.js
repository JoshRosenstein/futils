import construct_ from './construct_'


const Const=(x)=>({value: x, map: ()=>Const(x)  })


export default (lens, x) => lens(construct_(Const))(x).value
