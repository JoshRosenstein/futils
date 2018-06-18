import any from './any'
import is from './is'
import either from './either'
import both from './both'


describe("any", () => {
  const isBool = is('Boolean')
const isTruthy = either(x=>Boolean(x), x=>x===0)
const isTrueBool = both(isBool, isTruthy)

test('Object', () => {
expect(any(isTrueBool,{prop1:true,prop2:false})).toBeTruthy()
  expect(any(isTrueBool,{prop1:false,prop2:false})).toBeFalsy()
  expect(any(isTrueBool,{prop1:'true',prop2:false})).toBeFalsy()
})

test('Array', () => {
expect(any(isTrueBool,[true,false])).toBeTruthy()
  expect(any(isTrueBool,[false,false])).toBeFalsy()
  expect(any(isTrueBool,['true',false])).toBeFalsy()
})


test('checks if any of array items conforms to cb', () => {
  var anyGt5 = any(i => i > 5)
  expect(anyGt5([1, 2, 3, 4, 5, 6])).toBeTruthy()
  expect(anyGt5([1, 2, 3, 4])).toBeFalsy()
})

})
