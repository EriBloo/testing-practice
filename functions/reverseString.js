const reverseString = (str) => {
  if (typeof str === 'string') {
    return str.split('').reverse().join('');
  }
  return str;
}

export default reverseString;
