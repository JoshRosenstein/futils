/* @flow */
/*eslint-disable no-undef, no-unused-vars, no-console*/

import {is, isNil, add, nth} from '../src'

//Type
{
  const t1: Function = is
  const t2: boolean = is('number', 1)
  const t3: boolean = is('number')(1)
  const t4: (v: any) => boolean = is('number')
}
{
  const t1: Function = isNil
  const t2: boolean = isNil(1)
  const t3: boolean = isNil({})
  const t4: boolean = isNil(null)
  const t5: boolean = isNil(undefined)
}

{
  const a: (b: number) => number = add()
  const b: number = a(1)
}

const List: Array<number> = [1, 2, 3]

{
  const a: number = nth(1)
}
