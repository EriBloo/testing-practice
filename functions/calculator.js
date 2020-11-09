const calculator = (() => {
  let decimals = 0;

  const countDecimals = (val) => {
    if (val % 1 !== 0) {
      return val.toString().split('.')[1].length;
    }
    return 1;
  }

  const setDecimals = (val) => {
    if (decimals < val) {
      decimals = val;
    }
  }

  const sanitizeInput = (val) => {
    setDecimals(countDecimals(val));
    return parseFloat(val, 10);
  }

  const sanitizeInputs = (a, b) => {
    return [sanitizeInput(a), sanitizeInput(b)];
  }

  const add = (a, b) => {
    [a, b] = sanitizeInputs(a, b);
    return ((a * (decimals * 10)) + (b * (decimals * 10))) / (decimals * 10);
  }
  const sub = (a, b) => {
    [a, b] = sanitizeInputs(a, b);
    return ((a * (decimals * 10)) - (b * (decimals * 10))) / (decimals * 10);
  }
  const mult = (a, b) => {
    [a, b] = sanitizeInputs(a, b);
    return ((a * (decimals * 10)) * (b * (decimals * 10))) / (decimals * 100)
  }
  const div = (a, b) => {
    [a, b] = sanitizeInputs(a, b);
    return ((a * (decimals * 10)) / (b * (decimals * 10)))
  }

  return { add, sub, mult, div }
})();

export default calculator;