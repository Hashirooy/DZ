/*
Demo: не меняй код.
Проследи, как break/continue влияют на ход цикла.
*/

console.log("=== Task 10 Demo ===");

const queue = ["task-1", "", "task-2", "STOP", "task-3"];

for (let i = 0; i < queue.length; i += 1) {
  if (queue[i] === "") {
    continue;
  }

  if (queue[i] === "STOP") {
    console.log("stop marker found");
    break;
  }

  console.log("processing:", queue[i]);
}

let retries = 0;
while (retries < 3) {
  retries += 1;
  console.log("retry:", retries);
}
