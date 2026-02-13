/*
Контекст: нормализация тегов для фильтров.
Псевдо:
1) строковый тег -> trim + lowercase;
2) все нестроковые значения -> "untagged";
3) пустая строка после trim считается отсутствием тега.
Критерии приемки:
1) normalizeTag("   ") возвращает "untagged";
2) normalizeTag(null) возвращает "untagged" и не выбрасывает ошибку;
3) normalizeTag(["JS"]) тоже возвращает "untagged";
4) normalizeTag({ label: "JS" }) возвращает "untagged".
*/

function normalizeTag(tag) {
  if (typeof tag !== "string") {
    return "untagged";
  }

  const normalized = tag.trim().toLowerCase();

  return normalized === "" ? "untagged" : normalized;
}

console.log(normalizeTag("   "));
console.log(normalizeTag(null));
console.log(normalizeTag(["JS"]));
console.log(normalizeTag({ label: "JS" }));
