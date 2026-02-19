/*
Demo: не меняй код.
Сравни поведение this у обычной функции и arrow function.
*/

console.log("=== Task 12 Demo ===");

const dashboard = {
  title: "Week 1",
  regular() {
    console.log("regular this.title:", this.title);
  },
  arrow: () => {
    console.log("arrow this.title:", this.title);
  },
  showLater() {
    setTimeout(() => {
      console.log("later this.title:", this.title);
    }, 10);
  },
};

dashboard.regular();// выводит "Week 1", потому что this указывает на dashboard
dashboard.arrow(); // не выводит "Week 1", потому что this указывает на глобальный объект, а не на dashboard
dashboard.showLater(); // выводит "Week 1", потому что стрелочная функция внутри setTimeout наследует this от showLater, который указывает на dashboard
