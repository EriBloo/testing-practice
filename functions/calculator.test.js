import calculator from './calculator';

test('adds 2 numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('subtracts 2 numbers', () => {
  expect(calculator.sub(5, 4)).toBe(1);
});

test('multiplies 2 numbers', () => {
  expect(calculator.mult(2, 5)).toBe(10);
});

test('divides 2 numbers', () => {
  expect(calculator.div(8, 2)).toBe(4);
});

test('doesn\'t break with strings', () => {
  expect(calculator.add('2', 2)).toBe(4);
});

test('divide by 0', () => {
  expect(calculator.div(2, 0)).toBe(Infinity);
});

test('floating point numbers add', () => {
  expect(calculator.add(0.1, 0.2)).toBe(0.3);
});

test('floating point numbers subtract', () => {
  expect(calculator.sub(0.3, 0.1)).toBe(0.2);
});

test('floating point numbers multiply', () => {
  expect(calculator.mult(0.1, 0.2)).toBe(0.02);
});

test('floating point numbers divide', () => {
  expect(calculator.div(0.2, 0.2)).toBe(1);
});