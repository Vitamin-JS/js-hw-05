// =====================================   Задача 5-1   ================================================
// =====================================================================================================
//
// function-constructor
// Напиши функцию - конструктор Account, которая создает объект со свойствами login и email.

// В prototype функции - конструктора добавь метод getInfo(), который возвращает строку
// со значениями свойств login и email объекта.
//

// -------------------------------------   Решение   ---------------------------------------------------
//
// // Write code under this line
// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
// };

// Account.prototype.getInfo = function () {
//     return `login : ${this.login}, email: ${this.email}`
// };

// -----------------------------------------------------------------------------------------------------
//

// console.log(typeof Account.prototype.getInfo);
// // 'function'

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo());
// // 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account('Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com'
//

// =====================================   Задача 5-2   ================================================
// =====================================================================================================
//
//     class
//     Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${ имя } is ${ возраст } years old
// and has ${ кол - во фоловеров } followers

// -------------------------------------   Решение   ---------------------------------------------------
//
//  // Write code under this line
// class User {
//   constructor(name, age, followers) {
//     (this.name = name), (this.age = age), (this.followers = followers);
//   }

//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
//   }
// }

// -----------------------------------------------------------------------------------------------------
//

// console.log(typeof User);
// // 'function' ----  OK

// const mango = new User("Mango", 2, 20);
// console.log(mango.getInfo());
// // 'User Mango is 2 years old and has 20 followers' ------  OK

// console.log(typeof mango.getInfo);
// // 'function'

// const poly = new User("Poly", 3, 17);
// console.log(poly.getInfo());
// // 'User Poly is 3 years old and has 17 followers'
//

// =====================================   Задача 5-3   ================================================
// =====================================================================================================
//
//                              ИСПОЛЬЗОВАНИЕ МЕТОДОВ КЛАССА
// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих

// -------------------------------------   Решение   ---------------------------------------------------
//
// Write code under this line

// class Storage {
//   constructor(goods) {
//     this.items = goods;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);

//     return this.items;
//   }

//   removeItem(item) {
//     // for (const element of goods) {
//     if (this.items.includes(item)) {
//       this.items.splice(1, 1);
//     }

//     return this.items;
//   }
// }

// // -----------------------------------------------------------------------------------------------------
// //

// // console.log(typeof Storage);
// // 'function' -----  OK

// const goods = ["Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор"];

// const storage = new Storage(goods);

// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ]                            -----   OK      */

// storage.addItem("Дроид");
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ]                            -----   OK     */

// storage.removeItem("Пролонгер");
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ]                            -----   OK      */

// =====================================   Задача 5-4   ================================================
// =====================================================================================================
//

       ПЕРЕИСПОЛЬЗОВАНИЕ МЕТОДОВ КЛАССА
Напиши класс StringBuilder.На вход он получает один параметр - строку, которую записывает в свойство _value.

Добавь классу следующий функционал:

Геттер value - возвращает текущее значение поля _value
Метод append(str) - получает параметр str(строку) и добавляет ее в конец _value
Метод prepend(str) - получает параметр str(строку) и добавляет ее в начало value
Метод pad(str) - получает параметр str(строку) и добавляет ее в начало и в конец _value
Метод pad должен использовать методы append и prepend