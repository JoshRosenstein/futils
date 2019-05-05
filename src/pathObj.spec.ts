import { pathObj } from './pathObj';
import { flow } from './flow';

interface SampleType {
  a: {
    b: {
      c: number;
      d?: number;
    };
    z?: number;
  };
  x?: number;
  y: number;
}

const obj: SampleType = {
  a: {
    b: {
      c: 1,
    },
  },
  y: 10,
};

describe('data first', () => {
  test('should return default value (input undefined)', () => {
    type MaybeSampleType = SampleType | undefined;
    const e = pathObj(undefined as MaybeSampleType, ['y']);

    expect(e).toEqual(undefined);
  });

  test('should return value', () => {
    expect(pathObj(obj, ['y'])).toEqual(10);
  });

  test('should return default value', () => {
    const e = pathObj(obj, ['x']);

    expect(pathObj(obj, ['x'])).toEqual(undefined);
  });

  test('should return value (2 level deep)', () => {
    const e = pathObj(obj, ['a', 'b']);

    expect(e).toEqual({ c: 1 });
  });

  test('should return default value (2 level deep)', () => {
    expect(pathObj(obj, ['a', 'z'])).toEqual(undefined);
  });

  test('should return value (3 level deep)', () => {
    expect(pathObj(obj, ['a', 'b', 'c'])).toEqual(1);
  });
});

describe('data last', () => {
  test('1 level', () => {
    expect(
      flow(
        obj,
        pathObj(['x']),
      ),
    ).toEqual(undefined);
  });
  test('2 level', () => {
    expect(
      flow(
        obj,
        pathObj(['a', 'z']),
      ),
    ).toEqual(undefined);
  });
  test('3 level', () => {
    const e = flow(
      obj,
      pathObj(['a', 'b', 'd']),
    );
    expect(e).toEqual(undefined);
  });
});
