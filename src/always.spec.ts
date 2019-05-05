import always from './always';

test('returns value given in 1st argument', () => {
  expect(always(1)()).toBe(1);
});
