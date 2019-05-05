import { flow } from './flow';
import { mapObj } from './mapObj';

describe('data_first', () => {
  test('Object', () => {
    const a = mapObj(
      {
        age: 29,
        interval: 10,
      },
      (value, k) => ({ [k]: value + 1 }),
    );
    const eA = { age: 30, interval: 11 };

    expect(a).toEqual(eA);
  });
});

describe('data_last', () => {});
test('Object', () => {
  const a = flow(
    {
      age: 29,
      interval: 10,
    },
    mapObj((value, k) => ({ [k]: value + 1 })),
  );

  const eA = { age: 30, interval: 11 };

  expect(a).toEqual(eA);
});
