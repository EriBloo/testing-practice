import reverseString from './reverseString';

test('reverses string', () => {
  expect(reverseString('something')).toBe('gnihtemos');
});

test('reverses with space', () => {
  expect(reverseString('two words')).toBe('sdrow owt');
});

test('works with empty strings', () => {
  expect(reverseString('')).toBe('');
});

test('doesn\'t break on numbers', () => {
  expect(reverseString(22)).toBe(22);
});

test('double use returns starting string', () => {
  expect(reverseString(reverseString('test'))).toBe('test');
});