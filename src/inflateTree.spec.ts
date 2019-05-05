import { inflateTree } from './inflateTree';

describe('inflateTree', () => {
  it('Works', () => {
    const a = inflateTree('-')({
      'data-profile-name': 'Black Jack',
      'data-profile-age': 93,
      'data-metadata-interval': '10s',
      'data-location': 'http://api.example.com/profiles/24',
    });

    expect(a).toEqual({
      data: {
        profile: {
          name: 'Black Jack',
          age: 93,
        },
        metadata: { interval: '10s' },
        location: 'http://api.example.com/profiles/24',
      },
    });
  });
});
