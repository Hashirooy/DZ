/*
Контекст: обертка once для функций.
Псевдо:
1) функция-обертка вызывает fn только один раз;
2) результат кэшируется и возвращается при последующих вызовах;
3) аргументы передаются как есть.
Критерии приемки:
1) onceSum(2, 3) -> 5;
2) onceSum(10, 20) -> 5;
3) hits после двух вызовов onceInit равен 1.
*/

function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn(args);
      called = true;
    }

    return result;
  };
}

const sum = (a, b) => a + b;
const onceSum = once(sum);

let hits = 0;
const init = () => {
  hits += 1;
  return "ready";
};
const onceInit = once(init);

console.log(onceSum(2, 3));
console.log(onceSum(10, 20));
console.log(onceInit());
console.log(onceInit());
console.log("hits:", hits);
