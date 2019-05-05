import cascadingPath from './cascadingPath';

describe('argumentsToList', () => {
  test('works', () => {
    expect(
      cascadingPath([
        ['summary', 'current', 'session'],
        ['data', 'sessions', null, 'relationships', 'account', 'data', 'id'],
        ['data', 'accounts', null, 'attributes', 'name'],
      ])({
        summary: { current: { session: '1' } },
        data: {
          sessions: {
            1: {
              id: '1',
              relationships: { account: { data: { id: '2' } } },
            },
          },
          accounts: {
            2: {
              id: '2',
              attributes: { name: 'Jack Black' },
            },
          },
        },
      }),
    ).toEqual('Jack Black');
  });
});
