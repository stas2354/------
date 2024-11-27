// Задача 1
let num1 = parseInt(prompt("Введите любое число:"));
document.getElementById("task1").innerHTML = "Введенное число: " + num1;


// Задача 2
let num2 = parseFloat(prompt("Введите первое число:"));
let num3 = parseFloat(prompt("Введите второе число:"));

let sum = num2 + num3;
let diff = num2 - num3;
let prod = num2 * num3;
let quot = num2 / num3;

document.getElementById("task2").innerHTML = 
  "Сумма: " + sum + "<br>" +
  "Разность: " + diff + "<br>" +
  "Произведение: " + prod + "<br>" +
  "Частное: " + quot;


// Задача 3
let userNum = parseFloat(prompt("Загадайте число, умножьте его на 2, прибавьте 7, и введите результат:"));
let guessedNum = (userNum - 7) / 2;
alert("Вы загадали число: " + guessedNum);


// Задача 4
let userName = prompt("Введите ваше имя:");
let birthYear = parseInt(prompt("Введите год вашего рождения:"));
let currentYear = new Date().getFullYear();
let userAge = currentYear - birthYear;

document.write("<p>" + userName + ": " + userAge + "</p>");



