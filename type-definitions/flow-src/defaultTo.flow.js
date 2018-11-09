export type DefaultTo_ = 
  (<T>(defaults: T, value: null | void)=> T) &
  (<T, U>(defaults: T, value: U | null | void)=> T | U)


  export type DefaultTo  = DefaultTo_ &
  (<T>(defaults: T)=> ( (value: null | void)=> T) & (<U>(value: U | null | void)=> T | U))
  
