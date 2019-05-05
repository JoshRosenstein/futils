import { compose } from './compose';

describe('compose', () => {
  it('composes', () => {
    expect(
      compose(
        (x) => x - 8,
        (x) => x + 10,
        (x) => x * 10,
      )(4),
    ).toEqual(42);
    expect(
      compose(
        (x) => x + 2,
        (x, y) => x * y,
      )(4, 10),
    ).toEqual(42);
  });
});
