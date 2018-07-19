import toKebabCase from './toKebabCase'

describe('toKebabCase', () => {
  describe('should convert string to kebab-case', () => {
    const toKebabCaseUtil = (str, result) =>
      it(`${str} to be ${result}`, () => expect(toKebabCase(str)).toBe(result))
    const helloWorld='hello-world'
    toKebabCaseUtil('hello world', helloWorld)
    toKebabCaseUtil('hello_world', helloWorld)
    toKebabCaseUtil('helloWorld', helloWorld)
    toKebabCaseUtil('hello-World', helloWorld)
    toKebabCaseUtil('hello world', helloWorld)
    toKebabCaseUtil('hello', 'hello')
    toKebabCaseUtil('hello-', 'hello-')
    toKebabCaseUtil('   hello  ', 'hello')

  })
})
