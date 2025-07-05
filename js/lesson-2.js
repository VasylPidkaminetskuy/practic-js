// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// let index = 0;
// for (const item of styles) {
//     if (item === 'blues') {
//         styles[index] = 'classic';
//         break;
//     }
//     index++;
// }

// console.log(styles);

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//    console.log(`${i + 1}: ${array[i]}`);
//   }
// }

// logItems(['new', 'fast' ,'train']);
// =================================================

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array) {
//     const userName = prompt('Enter name:')
//     for (const userLog of array) {
//         if (userLog === userName) {
//            return alert (`Welcome ${userName}`);
//         }

//     }
//     alert('User not found');
// }

// console.log(checkLogin(['trump', 'figaro', 'Mortale']));

// =================================================================

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

.