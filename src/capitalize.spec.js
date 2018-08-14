import capitalize from './capitalize'

describe('capitalize', () => {

  it('Works', ()=> {
    expect(capitalize('hello')).toEqual('Hello')
    expect(capitalize('hello notCap')).toEqual('Hello notcap')

  })  })
