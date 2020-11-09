import analyze from './analyze';

test('returns valid object', () => {
  expect(analyze([1, 2, 3, 4])).toEqual({ average: 2.5, min: 1, max: 4, length: 4 });
});

test('works with empty array', () => {
  expect(analyze([])).toEqual({ average: null, min: null, max: null, length: 0 });
});

test('throws error if non-numeral values in array', () => {
  expect(() => analyze(['2', 2])).toThrow('All values in array must be numbers');
});

test('throws error if argument is not array', () => {
  expect(() => analyze(7, 2)).toThrow('Argument must be array');
});