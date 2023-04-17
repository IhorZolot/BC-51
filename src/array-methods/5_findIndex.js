/*

 - Не змінює оригінальний масив.
 - Поелементо перебирає оригінальний масив.
 - Повертає індекс першого елемента, що задовольняє умову, тобто, коли колбек повертає true.
 - Якщо жоден елемент не задовольняє умову, тобто для всіх елементів колбек повернув false, метод повертає -1.

*/

let array = [
  {
    name: '123',
    age: 12,
    phone: '+28099448',
  },
  {
    name: '123',
    age: 20,
    phone: '+28099854185',
  },
  {
    name: '123',
    age: 31,
    phone: '+280996161',
  },
];

const objIndex = array.findIndex(e => {
  return e.name === '123' && e.age > 18;
});

console.log(objIndex);
// let str = ['Roman', 'Anatoliy', 'Nazar', 'Julia', 'Mariya'];