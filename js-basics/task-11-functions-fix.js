/*
Контекст: генерация карточки пользователя с форматированием.
Псевдо:
1) createUserCard возвращает строку;
2) параметр role имеет значение по умолчанию;
3) applyFormatter возвращает результат formatter.
Критерии приемки:
1) createUserCard("Mira", "mentor") возвращает строку "Mira — mentor";
2) createUserCard("Mira") возвращает строку "Mira — student";
3) applyFormatter(card, toUpperLabel) возвращает "[MIRA — MENTOR]";
4) в финальном выводе нет undefined вместо card/formatted.
*/

const createUserCard = function (name, role = "student") {
  return `${name} — ${role}`;
};

function applyFormatter(name, formatter) {
  return formatter(name);
}

function toUpperLabel(value) {
  return `[${value.toUpperCase()}]`;
}

const card = createUserCard("Mira", "mentor");
const cardDefault = createUserCard("Mira");
const formatted = applyFormatter(card, toUpperLabel);
console.log("card:", card);
console.log("card default:", cardDefault);
console.log("formatted:", formatted);
