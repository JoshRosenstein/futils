import { invoker } from './invoker';

describe('invoker', () => {
  test('calls method of target object with arguments', () => {
    const sliceFrom = invoker(2, 'slice');
    expect(sliceFrom(6, 8, 'abcdefghijklm')).toEqual('gh');
    expect(sliceFrom(6)(8)('abcdefghijklm')).toEqual('gh');
  });
});
