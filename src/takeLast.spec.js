import takeLast from "./takeLast";

describe("takeLast", () => {

  test('takes last N last elements', () => {
    expect(takeLast(2)(["a", "b", "c"])).toEqual( ["b", "c"])
    expect(takeLast(2)('123456')).toEqual('56')
  })

  test('returns full array/string when N > data.length', () => {
    expect(takeLast(8)([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
    expect(takeLast(8)('1234')).toEqual('1234')
  })

  test('returns the value "as is" when N < 0', () => {
    expect(takeLast(-8)([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
    expect(takeLast(-8)('1234')).toEqual('1234')
  })

})
