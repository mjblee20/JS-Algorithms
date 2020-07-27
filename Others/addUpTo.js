function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i < n; i++) {
    total += i;
  }
  return total;
}

function addUpTo2(n) {
  return n * (n + 1) / 2
}

console.time('addup1');
addUpTo1(10000000)
console.timeEnd('addup1');

console.time('addup2');
addUpTo2(10000000)
console.timeEnd('addup2');
