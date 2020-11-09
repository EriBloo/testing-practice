import ceasarCipher from './ceasarCipher';

test('cipher word', () => {
  expect(ceasarCipher('east', 1)).toBe('fbtu');
});

test('cipher multiple words', () => {
  expect(ceasarCipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});

test('works with weird signs', () => {
  expect(ceasarCipher('d3fend! the e?ast', 1)).toBe('e3gfoe! uif f?btu');
});

test('works with high key numbers', () => {
  expect(ceasarCipher('defend the east', 859)).toBe('efgfoe uif fbtu');
});

test('works with uppercase', () => {
  expect(ceasarCipher('Defend the east Wall of the castle', 1)).toBe('Efgfoe uif fbtu Xbmm pg uif dbtumf');
});

test('throws an error with non string input as argument 1', () => {
  expect(() => ceasarCipher(2, 2)).toThrow('Expected string as argument 1');
});

test('throws an error with non number input as argument 2', () => {
  expect(() => ceasarCipher('test', '2')).toThrow('Expected number as argument 2');
});

test('works with negative key', () => {
  expect(ceasarCipher('efgfoe uif fbtu xbmm pg uif dbtumf', -1)).toBe('defend the east wall of the castle');
});

test('works with big negative key', () => {
  expect(ceasarCipher('efgfoe uif fbtu xbmm pg uif dbtumf', -859)).toBe('defend the east wall of the castle');
});
