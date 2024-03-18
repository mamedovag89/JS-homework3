 //Задание 1 
// Текст задания
// 1. Написать функцию, которой передаем, имя, фамилия и
// возраст, и получаем строку "Привет Иван Петров с
// возрастом 17" (только здесь данные, которые были
// переданы в функцию)
// 2. Создайте функцию которая возводит переданное число в
// квадрат
// 3. Сделайте функцию, которая параметром принимает
// число и проверяет, положительное это число или
// отрицательное. В первом случае пусть функция выводит
// в консоль текст '+++', а во втором '---'.

// function getUserData(name, LastName,age ) {
//     alert(`Привет ${name} ${LastName} с возрастом ${age}`)
// } 

// getUserData (Иван, Петров, 45);

// function upSquare (number) {
//     return number * number;
// }

// upSquare (4);

// let checkPositive = (number) => {
//     if(number > 0) {
//         return true;
//     } else {
//         return false;  // стрелочная функция
//     }
// }

// let checkPositive2 = function(number) {
//     if(number > 0) {
//         return true;
//     } else {
//         return false;  // одно и тоже с предыдущей функцией
//     }

// };

// function checkPositive3 (number) {
//     if(number > 0) {
//         return true;
//     } else {
//         return false;
//     }

// }

// let checkPositive4 = checkPositive3;
// console.log(checkPositive(2));
// console.log(checkPositive2(3));
// console.log(checkPositive3(-4));
// console.log(checkPositive4(5));


// Задание 2 
// 1. Сделайте функцию, которая параметрами принимает 3 числа и
// выводит в консоль сумму этих чисел.
// 2. С помощью созданной вами функции выведите в консоль сумму
// значений этих переменных.
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// 1. Дана фукнция
// function func(num = 5) {
// console.log(num * num);
// }
// Расскажите, каким будет результат каждого из вызовов функции.
// func(2);
// func(3);
// func();

// function gaa(num1, num2, num3) {
//     console.log(num1 + num2 + num3);
// }

// let a1 = 1;
// let a2 = 2;
// let a3 = 3;

// getSum(a1, a2, a3);

// function func(num = 5) {
// console.log(num * num);
// }
// //Расскажите, каким будет результат каждого из вызовов функции.
// func(2);
// func(3);
// func();

// Задание 3 
// 1. Сделайте функцию, которая параметром принимает число, а
// возвращает квадратный корень из этого числа. С помощью этой
// функции найдите корень числа 3, затем найдите корень числа 4.
// Просуммируйте полученные результаты и выведите их в консоль.
// 2. Создайте функцию, которая находит минимальное число из 2х
// передаваемых аргументов функции

// function extractRoot (number) {
//     return Math.sqrt (number);
// }

// let num1=extractRoot(4);
// let num2 = extractRoot(9);

// console.log(num1 + num2);

// function minMaxNumber (num1, num2) {
//     if (num1 < num2) {
//         console.log(num1);
//     }else {
//         console.log(num2);
//     }
// }
// minMaxNumber(1,2);

// Задание 4 
// 1. Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.
// 2. Написать функцию, которой передаем имя и она возвращает
// приветствие в зависимости от времени суток (Доброе
// утро\день\вечер\ночи Иван)

// function getDay (number) {
//     switch(number) {
//         case 1:
//             console.log('понедельник');
//             break;
//         case 2:
//             console.log('вторник');
//             break;
//         case 3:
//             console.log('среда');
//             break;
//         case 4:
//             console.log('четверг');
//             break;
//         case 5:
//             console.log('пятница');
//             break;
//         case 6:
//             console.log('суббота');
//             break;
//          case 7:
//             console.log('воскресенье');
//             break;
//         default:
//             console.log('День не найден');
//             break;
//     }
// }

// getDay(3);
// getDay(8);
    