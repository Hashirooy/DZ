/*
Контекст: логирование шагов и обновление профиля без потери ссылки.
Псевдо:
1) вывести шаги 1..3 в правильном порядке;
2) дописать role в профиль, не создавая новый объект;
3) не менять константные ссылки.
Критерии приемки:
1) в консоли выводятся шаги 1, 2, 3 именно в таком порядке;
2) profile успешно дополняется role и выводится как объект с name и role;
3) profile остается тем же объектом (сравнение ссылок возвращает true);
4) в процессе выполнения нет ошибки reassignment для const.
*/

for (let step = 1; step <= 3; step += 1) {
  setTimeout(() => {
    console.log("loaded step:", step);
  }, 10);
}

const profile = { name: "Nina" };
const originalRef = structuredClone(profile);
profile.role = 'admin';
console.log("profile:", profile);
console.log("same ref:", originalRef === profile);
