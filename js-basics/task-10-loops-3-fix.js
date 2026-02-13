/*
Контекст: разбиение списка на страницы.
Псевдо:
1) возвращать массив страниц, каждая — массив элементов;
2) не создавать пустую страницу;
3) пустой вход -> пустой выход.
Критерии приемки:
1) buildPages(["a", "b", "c", "d"], 2) -> [["a", "b"], ["c", "d"]];
2) buildPages(["a", "b", "c"], 2) -> [["a", "b"], ["c"]];
3) buildPages([], 2) -> [].
*/

function buildPages(items, size) {
  const pages = [];
  if(items.length === 0) {
    return []; 
  }

  for (let i = 0; i <= items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }

  return pages;
}

console.log(buildPages(["a", "b", "c", "d"], 2));
console.log(buildPages(["a", "b", "c"], 2));
console.log(buildPages([], 2));
