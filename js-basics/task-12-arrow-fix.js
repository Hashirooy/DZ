/*
Контекст: счётчик с методами объекта.
Псевдо:
1) increment должен работать синхронно;
2) incrementLater должен работать асинхронно, но на том же объекте;
3) this не должен “утекать” наружу.
Критерии приемки:
1) после выполнения increment() значение counter.value увеличивается до 1;
2) лог "inside timeout" показывает 2;
3) после incrementLater() итоговое значение становится 2;
4) изменения должны происходить в counter.value, а не в globalThis.value.
*/

const counter = {
  value: 0,
  increment: () => {
    this.value += 1;
  },
  incrementLater() {
    setTimeout( () => {
      this.value += 1;
      console.log("inside timeout:", this.value);
    }, 10);
  },
};

counter.increment();
counter.incrementLater();

setTimeout(() => {
  console.log("final value:", counter.value);
}, 30);
