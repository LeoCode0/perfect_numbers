const perfectNumbers = (n) => {
  const perfectNumbers = [];
  for (let i = 1; i < n; i++) {
    const divisors = [];
    const half = Math.floor(i / 2);
    let result = 0;
    for (let j = 1; j <= half; j++) {
      if (i % j === 0) {
        divisors.push(j);
      }
    }
    if (divisors.length > 0) {
      result = divisors.reduce((count, item) => count + item);
    }
    if (result === i) {
      perfectNumbers.push(i);
    }
  }
  return perfectNumbers;
};
console.log(perfectNumbers(9000));
