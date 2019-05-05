import { flow } from './flow';

it('should flow a single operation', () => {
  const result = flow(
    1,
    (x) => x * 2,
  );
  expect(result).toEqual(2);
});

it('should flow operations', () => {
  const result = flow(
    1,
    (x) => x * 2,
    (x) => x * 3,
  );
  expect(result).toEqual(6);
});

it('should flow with function that has optional secaond arg ', () => {
  const result = flow(
    4,
    (x, y = 10) => x * y,
    (x) => x + 2,
  );
  expect(result).toEqual(42);
});
