const ceasarCipher = (str, key) => {
  if (typeof str !== 'string') {
    throw new Error('Expected string as argument 1');
  }
  if (typeof key !== 'number') {
    throw new Error('Expected number as argument 2');
  }

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const cipher = (() => {
    const slicePoint = key % alphabet.length;
    return alphabet.slice(slicePoint) + alphabet.slice(0, slicePoint);
  })();

  return str.split('').map((s) => {
    if (alphabet.includes(s.toLowerCase())) {
      if (s === s.toLowerCase()) {
        return cipher[alphabet.indexOf(s)];
      }
      else {
        return cipher[alphabet.indexOf(s.toLowerCase())].toUpperCase();
      }
    }
    return s;
  }).join('');
}

export default ceasarCipher;
