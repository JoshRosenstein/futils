import toPascalCase from './toPascalCase'

describe('toPascalCase', () => {
  describe('should convert string to PascalCase', () => {
    const toPascalCaseUtil = (str, result) =>
      it(`${str} to be ${result}`, () => expect(toPascalCase(str)).toBe(result))

    const helloWorld='HelloWorld'
    toPascalCaseUtil('hello world', helloWorld)
    toPascalCaseUtil('hello_world', helloWorld)
    toPascalCaseUtil('helloWorld', helloWorld)
    toPascalCaseUtil('hello-World', helloWorld)
    toPascalCaseUtil('hello world', helloWorld)
      
    toPascalCaseUtil('hello', 'Hello')
    toPascalCaseUtil('hello-', 'Hello')
    toPascalCaseUtil('   hello  ', 'Hello')
  })
})
