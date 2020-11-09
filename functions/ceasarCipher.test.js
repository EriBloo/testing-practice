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
