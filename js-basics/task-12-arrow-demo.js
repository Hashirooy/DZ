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

dashboard.regular();
dashboard.arrow();
dashboard.showLater();
