/*
Контекст: нормализация опций отчёта.
Псевдо:
1) дефолты применяются только для null/undefined;
2) 0, "", false считаются валидными значениями;
3) частичные опции не должны затирать заданные.
Критерии приемки:
1) normalizeOptions({ timeout: 0, title: "", retries: 0 }) сохраняет эти значения без подмены дефолтами;
2) normalizeOptions({ timeout: null, title: undefined, retries: null }) возвращает timeout: 3000, title: "Report", retries: 2;
3) normalizeOptions({ timeout: undefined, title: "Daily", retries: 5 }) сохраняет title и retries, но ставит timeout: 3000;
4) дефолты применяются только для null/undefined.
*/

function normalizeOptions(options) {
  const normalized = { ...options };

  normalized.timeout = normalized.timeout ?? 3000;
  normalized.title = normalized.title ?? "Report";
  normalized.retries ??= 2;

  return normalized;
}

console.log(normalizeOptions({ timeout: 0, title: "", retries: 0 }));
console.log(normalizeOptions({ timeout: null, title: undefined, retries: null }));
console.log(normalizeOptions({ timeout: undefined, title: "Daily", retries: 5 }));
