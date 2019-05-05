import and from './and';

describe('And', () => {
  test('returns value given in 1st argument', () => {
    expect(and(true, true)).toBeTruthy();
    expect(and(true, false)).toBeFalsy();
    expect(and(false, true)).toBeFalsy();
    expect(and(false, false)).toBeFalsy();
    // $FlowExpectedError
    expect(and(0, false)).toBeFalsy(); // 0 isNot boolean
  });
});
