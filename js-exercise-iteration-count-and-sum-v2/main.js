function countAndSum(number) {
  let result = 0;
  let cucupNumberNow = 1;

  for (let i = 0; i < number; i++) {
    if (cucupNumberNow > 3) {
      cucupNumberNow = 1;
    }

    result = result + cucupNumberNow;

    cucupNumberNow++;
  }

  return result;
}

console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(19)); // 0

module.exports = countAndSum;
