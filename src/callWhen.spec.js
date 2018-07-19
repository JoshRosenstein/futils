import callWhen from './callWhen'
import always from './always'

describe('callWhen', () => {

  it('Works', ()=> {

    const fn = (a)=>a+1

    expect(callWhen(always(true),fn, 1)).toBe(2)


  })


})
