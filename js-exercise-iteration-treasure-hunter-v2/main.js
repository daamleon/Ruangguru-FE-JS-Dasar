function trasureHunter(dailyLog) {
  let tresure = 0;

  for (let i = 0; i < dailyLog.length; i++) {
    if (dailyLog[i] === "$") {
      tresure = tresure + 100;
    } else if (dailyLog[i] === "x") {
      if (tresure > 10) {
        tresure = tresure - 10;
      } else {
        tresure = 0;
      }
    } else {
      if (tresure !== 0) {
        tresure = tresure - (tresure * 50) / 100;
      }
    }
  }

  return tresure;
}

console.log(trasureHunter("$x$#x$")); // 185
console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("x$#x$#x$")); // 160
console.log(trasureHunter("xx$#$#$#$###xx")); // 3.4375

module.exports = trasureHunter;
