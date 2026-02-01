/*
STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах
*/

function UserFn(name) {
  this.name = name;
  this.say = function () {
    return `Hi, ${this.name}`;
  };
}

class UserClass {
  constructor(name) {
    this.name = name;
  }
  say() {
    return `Hi, ${this.name}`;
  }
}

const a1 = new UserFn('A');
const a2 = new UserFn('B');
const b1 = new UserClass('A');
const b2 = new UserClass('B');

console.log('UserFn say equality:', a1.say === a2.say);
console.log('UserClass say equality:', b1.say === b2.say);


// TODO: добавь вывод размеров/ссылок и объясни, где это влияет на память.
console.log('a1.say === UserFn.prototype.say', a1.say === UserFn.prototype?.say);
console.log('b1.say === UserClass.prototype.say', b1.say === UserClass.prototype.say);
