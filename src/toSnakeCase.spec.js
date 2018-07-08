import toSnakeCase from './toSnakeCase'
describe('toSnakeCase', () => {
	describe('should convert string to snake_case', () => {
		const toSnakeCaseUtil = (str, result) =>
			it(`${str} to be ${result}`, () => expect(toSnakeCase(str)).toBe(result));
      const helloWorld='hello_world'
      toSnakeCaseUtil('hello world', helloWorld);
      toSnakeCaseUtil('hello_world', helloWorld);
      toSnakeCaseUtil('helloWorld', helloWorld);
      toSnakeCaseUtil('hello-World', helloWorld);
      toSnakeCaseUtil('hello world', helloWorld);

		toSnakeCaseUtil('hello', 'hello');
		toSnakeCaseUtil('hello-', 'hello_');
		toSnakeCaseUtil('   hello  ', 'hello');


	});
});
