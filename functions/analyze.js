const analyze = (ary) => {
  if (!Array.isArray(ary)) {
    throw new Error('Argument must be array');
  }
  if (ary.some((el) => typeof el !== 'number')) {
    throw new Error('All values in array must be numbers');
  }
  return {
    average: ary.reduce((last, curr) => last += curr, 0) / ary.length || null,
    min: ary.length ? Math.min(...ary) : null,
    max: ary.length ? Math.max(...ary): null,
    length: ary.length,
  }
}

export default analyze;
