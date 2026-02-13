/*
Demo: не меняй код.
Объясни, почему счетчики не влияют друг на друга.
*/

console.log("=== Task 11.3 Demo ===");

function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counterA = makeCounter();
const counterB = makeCounter();
// потому что разные лексические окружения для counterA и counterB
console.log(counterA());// 1
console.log(counterA());// 2
console.log(counterB());// 1
console.log(counterA());// 3
