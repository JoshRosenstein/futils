import endsWith from './endsWith';

describe('endsWith', () => {
  test('True Sentence', () => {
    const a = endsWith('no period')('I have no period');
    expect(a).toBeTruthy();
  });

  test('False Sentence', () => {
    const a = endsWith('I')('I have no period');
    expect(a).toBeFalsy();
  });

  test('Curried', () => {
    const a = endsWith('a', '!a');
    expect(a).toBeTruthy();
  });
});
