import { has } from './has';

describe('has', () => {
  test('checks if object has provided own property', () => {
    const protoObj = { b: 1 };
    const obj = { a: 1, __proto__: protoObj };

    expect(has('a', obj)).toBeTruthy();
    expect(has('a')(obj)).toBeTruthy();

    expect(has('b', obj)).toBeFalsy();
    expect(has('b')(obj)).toBeFalsy();
  });

  test('Works', () => {
    const hasName = has('name');
    expect(hasName({ name: 'alice' })).toBeTruthy();
    expect(hasName({ name: 'bob' })).toBeTruthy();
    expect(hasName({ lastname: 'dude' })).toBeFalsy();
  });
});
