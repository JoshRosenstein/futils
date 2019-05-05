import { lt } from './lt';

describe('lt', () => {
  it('works', () => {
    const a = lt(1, 2);

    expect(a).toBeTruthy();
  });
});
