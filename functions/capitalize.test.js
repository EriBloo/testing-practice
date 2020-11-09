import capitalize from './capitalize';

test('capitalize first letter', () => {
  expect(capitalize('something')).toBe('Something');
});

test('work with empty strings', () => {
  expect(capitalize('')).toBe('');
});

test('dont\t break with numbers', () => {
  expect(capitalize(2)).toBe(2);
});

test('work if already capitalized', () => {
  expect(capitalize('Another')).toBe('Another');
});