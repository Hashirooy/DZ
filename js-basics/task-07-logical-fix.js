/*
Контекст: проверка доступа к административному маршруту.
Псевдо:
1) доступ разрешён только администратору;
2) проверка не должна падать на null;
3) флаг допуска должен быть boolean.
Критерии приемки:
1) для { role: "admin" } в консоли есть "opening admin panel" и затем "route ready";
2) для { role: "student" } нет "opening admin panel", только "access denied";
3) handleRoute(null) не падает и выводит только "access denied";
4) isAllowed хранит boolean-значение.
*/

function openAdminPanel() {
  console.log("opening admin panel");
  return "opened";
}

function handleRoute(user) {
  let isAllowed = false;

  if (user && user.role === "admin") {
    openAdminPanel();
    isAllowed = true;
  }

  if (isAllowed === true) {
    console.log("route ready");
  } else {
    console.log("access denied");
  }
}

handleRoute({ role: "admin" });
handleRoute({ role: "student" });
handleRoute(null);
