import typeOf_ from '../typeOf_'

export default (sig, value) => typeOf_(value) === sig.toLowerCase()
