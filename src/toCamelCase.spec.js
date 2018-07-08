import toCamelCase from './toCamelCase'

describe('toCamelCase', () => {
	describe('should convert string to cascalCase', () => {
		const toCamelCaseUtil = (str, result) =>
			it(`${str} to be ${result}`, () => expect(toCamelCase(str)).toBe(result));

      const helloWorld='helloWorld'
      toCamelCaseUtil('hello world', helloWorld);
      toCamelCaseUtil('hello_world', helloWorld);
      toCamelCaseUtil('helloWorld', helloWorld);
      toCamelCaseUtil('hello-World', helloWorld);
      toCamelCaseUtil('hello world', helloWorld);
      
		toCamelCaseUtil('hello', 'hello');
		toCamelCaseUtil('hello-', 'hello');
		toCamelCaseUtil('  hello  ', 'hello');

	});
});
