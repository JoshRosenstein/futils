import { gt } from './gt';

describe('gt', () => {
  it('works', () => {
    const a = gt(2, 1);
    const eA = ['0', '1', '2'];

    expect(a).toBeTruthy();
  });
});
