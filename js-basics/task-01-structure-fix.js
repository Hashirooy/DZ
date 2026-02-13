/*
Контекст: генерация карточки профиля из данных пользователя.
Псевдо:
1) createProfile(user) -> объект { name, level }.
2) если level отсутствует, использовать "unknown".
3) formatProfile(profile) -> строка "Name (level)".
Критерии приемки:
1) profile после создания: { name: "Ira", level: "junior" };
2) вызов formatProfile(profile) возвращает строку "Ira (junior)";
3) при отсутствии level итоговая строка: "Ira (unknown)";
4) выполнение файла не падает с ошибкой доступа к profile.name.
*/

function createProfile(user) {
  return{
    name: user.name,
    level: user.level ? user.level : "unknown",
  };
}

function formatProfile(profile) {
  return `${profile.name} (${profile.level})`;
}

const profile = createProfile({ name: "Ira", level: "junior" });
const profileMissingLevel = createProfile({ name: "Ira" });
console.log("profile:", profile);
console.log("formatted:", formatProfile(profile));
console.log("formatted missing level:", formatProfile(profileMissingLevel));
