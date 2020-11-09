const ceasarCipher = (str, key) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const cipher = ((key) => {
    const slicePoint = key % alphabet.length;
    return alphabet.slice(slicePoint) + alphabet.slice(0, slicePoint);
  })(key);

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
