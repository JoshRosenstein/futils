
import toWords from "./toWords"
describe("toWords", () => {
  const toWordsUtil = (str, result) =>
    it(`${str} to be ${result}`, () => expect(toPascalCase(str)).toBe(result));


  test("Works", () => {
    expect(toWords(1)).toEqual('one')

expect(toWords(8888888888)).toEqual('eight billion, eight hundred eighty-eight million, eight hundred eighty-eight thousand, eight hundred eighty-eight')
expect(toWords(10000000000000)).toEqual('ten trillion')
expect(toWords(100000000000000)).toEqual('one hundred trillion')
expect(toWords(1000000000000000)).toEqual('one quadrillion')
  })

  // it('should return the number with an ordinal word if passed a second truthy argument', function () {
  //     expect(toWords(1, true)).toEqual('first');
  //     expect(toWords(2, true)).toEqual('second');
  //     expect(toWords(3, true)).toEqual('third');
  //     expect(toWords(10, true)).toEqual('tenth');
  //     expect(toWords(17, true)).toEqual('seventeenth');
  //     expect(toWords(30, true)).toEqual('thirtieth');
  //     expect(toWords(123, true)).toEqual('one hundred twenty-third');
  // })

})
