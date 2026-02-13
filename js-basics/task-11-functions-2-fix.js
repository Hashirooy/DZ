/*
Контекст: создание форматтера логов.
Псевдо:
1) createTagger(tag) возвращает функцию;
2) функция возвращает строку `${tag}: ${message}`;
3) разные tagger независимы.
Критерии приемки:
1) tagInfo("boot") -> "INFO: boot";
2) tagInfo("done") -> "INFO: done";
3) tagWarn("disk") -> "WARN: disk".
*/

function createTagger(tag) {
  return function(message){
    return `${tag}: ${message}`;
  }
}

const tagInfo = createTagger("INFO");
const tagWarn = createTagger("WARN");

console.log(tagInfo("boot"));
console.log(tagInfo("done"));
console.log(tagWarn("disk"));
