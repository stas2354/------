
let otgadki = 0;

function zagadka1() {
  let otvet1 = prompt("Загадка 1: Какое животное мурлычет?"); // Замените на ваши загадки
  let otvet = prompt("Ваш ответ:");
  if (otvet.toLowerCase() === "кот" || otvet.toLowerCase() === "кошка") { //Обработка регистра
    otgadki++;
    zagadka2();
  } else {
    alert("Неверно :(");
    showResult();
  }
}

function zagadka2() {
  let otvet1 = prompt("Загадка 2:  Сколько букв в слове 'семь'?"); // Замените на ваши загадки
  let otvet = prompt("Ваш ответ:");
  if (otvet === "4") {
    otgadki++;
  } else {
    alert("Неверно :(");
  }
  showResult();
}

function showResult(){
    alert("Количество отгаданных загадок: " + otgadki);
}

zagadka1();



function countToTen() {
  let output = "";
  for (let i = 1; i <= 10; i++) {
    output += i + "<br>";
  }
  return output;
}


function feast() {
  let answer;
  do {
    answer = parseInt(prompt("Еще по одной? (1 - нет, другое число - да)"));
  } while (answer !== 1);
  return "Застолье окончено!";
}


function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str === str.split("").reverse().join("");
}


function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findPrimes() {
  let primes = "";
  for (let i = 2; i <= 10; i++) {
    if (isPrime(i)) {
      primes += i + "<br>";
    }
  }
  return primes;
}


function displayResults() {
    document.getElementById("task2").innerHTML = countToTen();
    document.getElementById("task3").innerHTML = feast();
    document.getElementById("task4").innerHTML = "Факториал 10 равен: " + factorial(10);
    let surname = "Иванов"; 
    document.getElementById("task5").innerHTML = surname + " - " + (isPalindrome(surname) ? "палиндром" : "не палиндром");
    document.getElementById("task6").innerHTML = findPrimes();
}

displayResults();


