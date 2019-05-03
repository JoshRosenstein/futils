import {prepend} from './prepend'

describe('prepend', () => {
  test('Array', () => {
    const e= prepend("a")(["b"])
    expect(e).toEqual(["a", "b"])
  })
  test('String', () => {
    const e= prepend("a")("b")
    expect(e).toEqual("ab")
  })

})
