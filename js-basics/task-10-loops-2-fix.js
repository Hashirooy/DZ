/*
Контекст: очистка очереди задач.
Псевдо:
1) удалить пустые строки;
2) остановиться на "STOP" и сохранить его;
3) порядок остальных задач не меняется.
Критерии приемки:
1) cleanQueue(["task-1", "", "", "task-2", "STOP", "task-3"]) -> ["task-1", "task-2", "STOP"];
2) cleanQueue(["", "STOP", "task"]) -> ["STOP"];
3) cleanQueue(["task-1", "task-2"]) -> ["task-1", "task-2"].
*/

function cleanQueue(queue) {
  for (let i = 0; i < queue.length; i += 1) {
    if (queue[i] === "") {
      queue.splice(i, 1);
    }

    if (queue[i] === "STOP") {
      break;
    }
  }

  return queue;
}

console.log(cleanQueue(["task-1", "", "", "task-2", "STOP", "task-3"]));
console.log(cleanQueue(["", "STOP", "task"]));
console.log(cleanQueue(["task-1", "task-2"]));
