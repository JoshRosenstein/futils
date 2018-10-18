import flattenTree from './flattenTree'

describe('flattenTree', () => {
  it('Works', () => {
    const a = flattenTree('-')({
      data: {
        profile: {
          name: 'Kurtis Rainbolt-Greene',
          age: 24,
        },
        metadata: {
          interval: '10s',
        },
        location: 'http://api.example.com/profiles/24',
      },
    })
    const res = {
      'data-profile-name': 'Kurtis Rainbolt-Greene',
      'data-profile-age': 24,
      'data-metadata-interval': '10s',
      'data-location': 'http://api.example.com/profiles/24',
    }

    expect(a).toEqual(res)
  })
})
